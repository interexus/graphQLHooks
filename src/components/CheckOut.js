/*At first we can see how the libreries are imported from the react core*/
import React, { useContext } from "react";
/*then a custom hook called useCheckoutMutation is called from their own file*/
import useCheckoutMutation from "../hooks/useCheckoutMutation";
/*after that functions are called from their component files */
import { isLoggedIn } from "../services/service";
import { PetsContext } from "./../providers/refetchProvider";

export const CheckOut = ({ petId }) => {
  const refetch = useContext(PetsContext);
  const doCheckOut = useCheckoutMutation();
  const checkOut = () => {
    doCheckOut(
      {
        variables: { petId: petId },
      },
      { refetchQueries: [`petsQuery`] }
    )
      .then((_) => {
        refetch();
      })
      .catch((e) => console.log(e));
  };

  if (!isLoggedIn()) {
    return null;
  }

  return (
    <>
      <button onClick={() => checkOut()} className="btn btn-link">
        Check Out
      </button>
    </>
  );
};
