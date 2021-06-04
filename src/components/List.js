/*main react library is imported from react core*/
import React from "react";
/*customs components are imported from their files*/
import { CheckIn } from "./CheckIn";
import { CheckOut } from "./CheckOut";

/*function which makes the pet table/pet list*/
export const List = ({ pets }) => {
  return (
    <>
      <div className="row mt-4">
        <div className="col-sm-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <td className="w-25">
                  <p> Pet </p>
                </td>
                <td className="w-30">
                  <p> Category</p>
                </td>
                <td className="w-50">
                  <p> Customer</p>
                </td>
                <td className="w-50">
                  <p> Action</p>
                </td>
              </tr>
            </thead>
            <tbody>
              {pets.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.inCareOf?.name}</td>
                    <td>
                      {item.status === "AVAILABLE" ? (
                        <CheckOut petId={item.id} />
                      ) : (
                        <CheckIn petId={item.id} />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      ;
    </>
  );
};
