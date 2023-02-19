import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MedicineDetail = () => {
  const [user] = useAuthState(auth);
  const handleBooking = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    console.log(quantity);
    if (quantity > 0) {
      const medicin = {
        patient: user.displayName,
        quantity,
      };
      fetch("http://localhost:5000/medicin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(medicin),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("medicin", result);
          toast.success("medicin added");
        });
    } else {
      toast.error("Please Give a right value");
    }
  };

  return (
    <form onSubmit={handleBooking}>
      <div className="m-20 flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl  ">
          <div className="card-body">
            <h2 className="card-title">Are you sure you want to order this?</h2>

            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="quantity"
              placeholder="quantity"
              className="input required input-bordered w-full max-w-xs "
              required
            />

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MedicineDetail;
