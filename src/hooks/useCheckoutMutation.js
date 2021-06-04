/*import gql allow us to use graphQL that is a method to pass/share queries files to Apollo client*/ 
import gql from "graphql-tag";
/*the hook "useMutation is called from @apollo/client located into node_modules */
/*When your component renders, useMutation returns a tuple that includes: A mutate function 
that we can call at any time to execute the mutation. An object with fields that represent the 
current status of the mutation's execution.*/

import { useMutation } from "@apollo/client";

/*useMutation allow us to use this structure*/
export const checkoutQL = gql`
  mutation CheckOut($petId: ID!) {
    checkOut(id: $petId) {
      pet {
        id
        name
        status
      }
      customer {
        name
      }
    }
  }
`;

export default () => {
  let [checkOut] = useMutation(checkoutQL);
  return checkOut;
};
