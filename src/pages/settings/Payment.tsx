import React from "react";
import Form from "../../components/form/Form";

const Payment: React.FC = () => {
  return (
    <div className="payment">
      <div className="title">
        <h3>Pay on delivery</h3>
        <p>Add details of how you’ll charge buyers on delivery.</p>
      </div>
      <Form />
    </div>
  );
};

export default Payment;
