import React from "react";
import styled from "styled-components";
import { FormatePrice } from "../helper/FormatePrice";
import { CartAmountToggle } from "./CartAmountToggle";
import { MdDelete } from "react-icons/md";
import { store } from "../store";
import { productActions } from "../redux/slice";
import { SetDecriment, SetIncriment } from "../redux/actions";

export const CartItems = ({ id, image, name, amount, price, Color }) => {
  return (
    <Wraper>
      <div className="cart-heading grid grid-five-column">
        <div className="cart-image-name">
          <figure>
            <img src={image} alt={id} />
          </figure>
          <div className="dis">
            <span>{name}</span>
            <div className="colors-dot" style={{ background: Color }}></div>
          </div>
        </div>
        <div className="cart-hide">
          <p>
            <FormatePrice price={price} />
          </p>
        </div>
        <div className="amount">
          <CartAmountToggle
            amount={amount}
            id={id}
            SetDecriment={SetDecriment}
            SetIncriment={SetIncriment}
          />
        </div>
        <div className="cart-hide">
          <p>{<FormatePrice price={price * amount} />}</p>
        </div>
        <div className="delete">
          <MdDelete
            onClick={() => {
              store.dispatch(productActions.removeCartItem({ data: id }));
            }}
            className="icon"
          />
        </div>
      </div>
    </Wraper>
  );
};

const Wraper = styled.div`
  .grid-five-column {
    grid-template-columns: repeat(5) 0.3fr;
    text-align: center;
    align-items: center;
  }

  .cart-image-name {
    display: flex;
  }
  .dis {
    padding: 0.5em;
  }
  .cart-image-name figure img {
    width: 50px;
    height: 50px;
    margin-bottom: 1em;
  }

  .colors-dot {
    display: block;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin: 0 0.1em;
    transition: all 0.2s;
  }

  .delete .icon {
    font-size: 20px;
    color: red;
    cursor: pointer;
  }
`;
