/*impor useQuery allow to React to manage any kinf of asynchronous data*/
/*the term asynchronous data could be builded out of time*/
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

/*the fild for the table is created and shered by grapQL*/
const petFieldsQuery = gql`
  fragment petFields on Pet {
    id
    name
    category
    status
    inCareOf {
      name
    }
  }
`;
/*the component is exported for their use*/
export const filterPetsQuery = gql`
  query petsQuery($status: PetStatus) {
    allPets(status: $status) {
      ...petFields
    }
  }
  ${petFieldsQuery}
`;

export default (status) => {
  return useQuery(filterPetsQuery, {
    fetchPolicy: "network-only",
    variables: {
      status: status,
    },
  });
};
