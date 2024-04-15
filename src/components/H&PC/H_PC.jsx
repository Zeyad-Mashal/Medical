import React from "react";
import "./H_PC.css";
const H_PC = () => {
  return (
    <section className="h_pc">
      <h1 className="mb-4">Choice Your Service</h1>
      <div className="h_pc_container">
        <div className="hospital_content card_item">
          <h2>Hospital</h2>
        </div>
        <div className="clinic_content card_item">
          <h2>Private Clinic</h2>
        </div>
      </div>
    </section>
  );
};

export default H_PC;
