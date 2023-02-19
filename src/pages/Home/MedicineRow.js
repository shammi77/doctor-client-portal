import React from "react";
import { useNavigate } from "react-router-dom";

const MedicineRow = ({ medicines }) => {
  const navigate = useNavigate();
  const navigateToMedicineDetail = (_id) => {
    navigate(`/medicien/${_id}`);
  };

  return (
    <div className="overflow-x-auto ">
      <table className="table w-full ">
        <thead>
          <tr>
            <th className="bg-primary">Name</th>
            <th className="bg-primary">Indication</th>
            <th className="bg-primary">Price</th>
            <th className="bg-primary">Buy Now</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine._id}>
              <td>{medicine.name}</td>
              <td>{medicine.indication}</td>
              <td>{medicine.price}</td>
              <td>
                <button
                  onClick={() => navigateToMedicineDetail(medicine._id)}
                  className="btn btn-xs btn-primary"
                  
                >
                  ORDER
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineRow;
