import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CartItems } from "../component/CartItems";
import { FormatePrice } from "../helper/FormatePrice";
import { Button } from "../styles/Button";
import { useSelector } from "react-redux";
import { store } from "../store";
import { productActions } from "../redux/slice";
import { useEffect } from "react";

const Cart = () => {
  const { cart, subTotal, shipingFeesh } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    store.dispatch(productActions.getSubTotal());
  }, [cart, subTotal]);

  if (cart?.length === 0 || cart === null) {
    return (
      <EmptyCart>
        <h2>No Item in Cart</h2>
      </EmptyCart>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-items">
          {cart?.length > 0 &&
            cart?.map((item) => <CartItems key={item?.id} {...item} />)}
        </div>
        <hr />
        <div className="cart-two-button ">
          <NavLink to={"/products"}>
            <Button>Continew shoping</Button>
          </NavLink>
          <button
            className="btn btn-clear"
            onClick={() => {
              store.dispatch(productActions.clearCart());
            }}
          >
            Clear Cart
          </button>
        </div>
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>Subtotal:</p>
              <p>
                <FormatePrice price={subTotal} />
              </p>
            </div>
            <div>
              <p>Shiping-fee:</p>
              <p>
                <FormatePrice price={shipingFeesh} />
              </p>
            </div>
            <hr />
            <div>
              <p>Order-Total</p>
              <p>
                <FormatePrice price={subTotal + shipingFeesh} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(5) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }

  .btn-clear {
    background-color: #e74c3c;
    color: white;
    padding: 0 2em;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
