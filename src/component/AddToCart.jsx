import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CartAmountToggle } from "./CartAmountToggle";
import { Button } from "../styles/Button";
import { AddProductToCart } from "../redux/actions";

export const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [Color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const SetIncriment = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  const SetDecriment = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:
          {colors.map((curCol, index) => {
            return (
              <button
                style={{ backgroundColor: curCol }}
                className={Color === curCol ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curCol)}
                key={index}
              >
                {Color === curCol ? <FaCheck /> : null}
              </button>
            );
          })}
        </p>
      </div>
      <CartAmountToggle
        amount={amount}
        SetIncriment={SetIncriment}
        SetDecriment={SetDecriment}
      />

      <NavLink to={"/cart"}>
        <Button
          onClick={() => {
            AddProductToCart(id, Color, amount, stock, product);
          }}
          className="btn"
        >
          Add To Cart
        </Button>
      </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .colors p {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .btnStyle {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: none;
    outline: none;
    color: white;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .amount-toggle {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
  }
  .amount-toggle > button {
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    background: none;
    cursor: pointer;
  }
  .amount-toggle .amount-style {
    font-size: 16px;
  }
`;
