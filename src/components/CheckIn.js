/*At first we can see how the libreries are imported from the react core*/
import React, { useContext } from "react";
/*then a custom hook called useCheckoutMutation is called from their own file*/
import useCheckInMutation from "../hooks/useCheckInMutation";
/*after that functions are called from their component files */
import { isLoggedIn } from "../services/service";
import { PetsContext } from "./../providers/refetchProvider";

/*the constant CheckIn is exported menwhile works on their function*/
/*this component use the hook useComponent which allow us to share information with any component, by storing the 
informacion in a central place allowing the component to take the necesary data*/
/*the pet's ID is created here and then exported*/
export const CheckIn = ({ petId }) => {
  const refetch = useContext(PetsContext);

  const doCheckIn = useCheckInMutation();
  const checkIn = () => {
    doCheckIn(
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
      <button onClick={() => checkIn()} className="btn btn-link">
        Check In
      </button>
    </>
  );
};
