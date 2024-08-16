import React from 'react';

const GroupPayment = (props) => {
  return (
    <div className="group--payment">
      <div className="group--payment--cardBrand">{props.cardBrand}</div>
      <div className="group--payment--cardNumber">{props.cardNumber}</div>
    </div>
  );
};

export default GroupPayment;
