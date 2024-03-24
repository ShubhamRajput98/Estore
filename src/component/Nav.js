import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgClose, CgMenu } from "react-icons/cg";
import { useSelector } from "react-redux";

export const Nav = () => {
  const [menu, setmenu] = useState();
  const { cart } = useSelector((state) => state.products);

  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          color: black;
          position: relative;
        }
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
        .cart-icon {
          font-size: 1.9em;
        }
        span {
          position: absolute;
          top: 0;
          right: -0.5em;
          font-size: 3px;
          background: blue;
          border-radius: 50%;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 16px;
          width: 16px;
          font-size: 10px;
        }
      }
    }
    .menu {
      display: none;
      font-size: 2.5em;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .menu {
        display: inline-block;
        position: absolute;
        right: 2em;
        top: 1em;
        z-index: 9999;

        .menu-icon {
          position: absolute;
        }

        .close {
          display: none;
        }
      }

      .navbar {
        .navbar-lists {
          position: absolute;
          left: 0;
          top: 0;
          height: 100vh;
          width: 100vw;
          background: white;
          z-index: 9999;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: translateX(100%);
        }
      }
      .active {
      }
      .active .navbar-lists {
        transform: translateX(0);
        transition: all 0.3s;
      }
      .active .menu-icon {
        display: none;
      }
      .active .menu .close {
        display: inline-block;
      }
    }
  `;
  return (
    <Nav>
      <div className={menu ? "active navbar" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to={"/"}
              className="navbar-link"
              onClick={() => setmenu(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className="navbar-link"
              onClick={() => setmenu(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/products"}
              className="navbar-link"
              onClick={() => setmenu(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className="navbar-link"
              onClick={() => setmenu(false)}
            >
              Contact
            </NavLink>
          </li>
          {/* <li>
            {isAuthenticated ? (
              <Button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log out
              </Button>
            ) : (
              <Button onClick={() => loginWithRedirect()}>Login</Button>
            )}
          </li> */}
          <li>
            <NavLink to={"/cart"} className="navbar-link">
              <AiOutlineShoppingCart className="cart-icon" />
              {cart?.length > 0 && <span>{cart?.length}</span>}
            </NavLink>
          </li>
        </ul>
        <div className="menu">
          <CgMenu className="menu-icon" onClick={() => setmenu(true)} />
          <CgClose className="menu-icon close" onClick={() => setmenu(false)} />
        </div>
      </div>
    </Nav>
  );
};
