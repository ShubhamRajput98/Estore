import React, { useEffect } from "react";
import styled from "styled-components";
import { BiGridAlt } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import { store } from "../store";
import { productActions } from "../redux/slice";
import { useSelector } from "react-redux";

export const Sort = () => {
  const { filterData, sortData } = useSelector((state) => state.products);

  useEffect(() => {
    store.dispatch(productActions.sortProducts());
  }, [sortData]);

  return (
    <Wrapper>
      <div className="btns">
        <button
          onClick={() =>
            store.dispatch(productActions.productLayOut({ data: true }))
          }
        >
          <BiGridAlt />
        </button>
        <button
          onClick={() =>
            store.dispatch(productActions.productLayOut({ data: false }))
          }
        >
          <BsList />
        </button>
      </div>
      <div className="products">
        <p>{filterData.length} Total Products</p>
      </div>
      <div className="dropdown">
        <form action="#">
          <select
            name="sort"
            id="sort"
            value={sortData}
            onChange={(e) =>
              store.dispatch(
                productActions.setFilterValues({
                  name: "sortData",
                  value: e.target.value,
                })
              )
            }
          >
            <option value="lowest">Price lowst</option>
            <option value="highest">Price highest</option>
            <option value="a-z">Price (a-z)</option>
            <option value="z-a">Price (z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 0;

  #sort {
    outline: none;
  }

  .btns {
    display: flex;
    gap: 10px;
  }
  .btns button {
    displya: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 25px;
    padding: 0.2em 0;
    border: none;
    outline: none;
    background: black;
    color: white;
    cursor: pointer;
  }
`;
