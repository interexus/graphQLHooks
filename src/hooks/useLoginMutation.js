/*import gql allow us to use graphQL that is a method to pass/share queries files to Apollo client*/ 
import { gql, useMutation } from "@apollo/client";
/*uses the constant loginQL to make a user template for register which will be shared by gql*/
const loginQL = gql`
  mutation($username: ID!, $password: String!) {
    logIn(username: $username, password: $password) {
      customer {
        name
      }
      token
    }
  }
`;
/*export the data to use it as component*/
export default () => {
  let doLogin = useMutation(loginQL)[0];
  return doLogin;
};
