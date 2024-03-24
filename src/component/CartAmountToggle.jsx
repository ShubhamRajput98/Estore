import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export const CartAmountToggle = ({
  id,
  amount,
  SetDecriment,
  SetIncriment,
}) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => SetDecriment(id)}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => SetIncriment(id)}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};
