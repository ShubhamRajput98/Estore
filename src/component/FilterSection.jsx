import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { FormatePrice } from "../helper/FormatePrice";
import { store } from "../store";
import { productActions } from "../redux/slice";
import { useSelector } from "react-redux";
export const FilterSection = () => {
  const {
    products,
    text,
    category,
    company,
    colors,
    minPrice,
    maxPrice,
    price,
  } = useSelector((state) => state.products);

  useEffect(() => {
    store.dispatch(productActions.filterProducts());
  }, [text, category, company, colors, price]);

  const getUniqData = (data, property) => {
    let newVal = data.map((curEle) => {
      return curEle[property];
    });

    if (property === "colors") {
      return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }

    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categoryOnlyData = getUniqData(products, "category");
  const companyOnlyData = getUniqData(products, "company");
  const colorsOnlyData = getUniqData(products, "colors");

  return (
    <Wrapper>
      <div className="filter-search">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search"
            name="text"
            value={text}
            onChange={(e) =>
              store.dispatch(
                productActions.setFilterValues({
                  name: "text",
                  value: e.target.value,
                })
              )
            }
          />
        </form>
        <div className="category">
          <h3>Category</h3>
          {categoryOnlyData.map((curEle, i) => (
            <button
              value={curEle}
              onClick={() =>
                store.dispatch(
                  productActions.setFilterValues({
                    name: "category",
                    value: curEle,
                  })
                )
              }
              type="button"
              name="category"
              key={i}
            >
              {curEle}
            </button>
          ))}
        </div>
        <div className="company">
          <h3>Company</h3>
          <select
            name="company"
            id="drop-down"
            onClick={(e) =>
              store.dispatch(
                productActions.setFilterValues({
                  name: "company",
                  value: e.target.value,
                })
              )
            }
          >
            {companyOnlyData.map((curEle, i) => (
              <option
                selected={curEle === company}
                key={i}
                value={curEle}
                name="company"
              >
                {curEle}
              </option>
            ))}
          </select>
        </div>
        <div className="colors">
          <h3>Colors</h3>
          <div className="d-flex">
            {colorsOnlyData.map((curEle, i) => (
              <button
                onClick={(e) =>
                  store.dispatch(
                    productActions.setFilterValues({
                      name: "colors",
                      value: curEle,
                    })
                  )
                }
                value={colors}
                name="colors"
                type="button"
                key={i}
                className={curEle === colors ? "colors-dot dot" : "colors-dot"}
                style={{ background: curEle }}
              >
                {curEle === "All" ? (
                  "All"
                ) : curEle === colors ? (
                  <FaCheck className="check" />
                ) : null}
              </button>
            ))}
          </div>
        </div>
        <div className="range">
          <h3>Price</h3>
          <div className="price">
            <FormatePrice price={price} />
          </div>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            onClick={(e) =>
              store.dispatch(
                productActions.setFilterValues({
                  name: "price",
                  value: e.target.value,
                })
              )
            }
          />
        </div>
        <div className="clear">
          <button
            onClick={() => store.dispatch(productActions.clearFilters())}
            className="filter-btn"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2em;

  .filter-search input {
    outline: none;
    padding: 5px;
  }

  .category {
    padding: 2em 0;
  }

  h3 {
    margin-bottom: 1em;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    display: block;
    background: none;
  }

  #drop-down {
    outline: none;
    width: 120px;
    padding: 0.3em;
    box-shadow: 0 0 5px #a59e9e;
    background: white;
  }

  .colors {
    padding: 2em 0;
  }

  .d-flex {
    display: flex;
    align-items: center;
  }

  .colors-dot {
    display: block;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    opacity: 0.5;
    margin: 0 0.1em;
    transition: all 0.2s;
    display: flex;
    justify-content: center;
  }
  .colors-dot:nth-child(1) {
    margin-bottom: 8px;
    margin-right: 5px;
  }
  .colors-dot:hover {
    opacity: 1;
  }
  .dot {
    opacity: 1;
  }
  .check {
    font-size: 12px;
    color: white;
  }
  .range input {
    width: 100%;
  }
  .price {
    display: flex;
    justify-content: space-between;
  }
  .clear {
    display: flex;
    justify-content: center;
    margin: 2em 0;
  }
  .filter-btn {
    border: none;
    outline: none;
    padding: 0.3em 0.5em;
    background: #e19548;
    color: white;
    transition: all 0.3s;
  }
  .filter-btn:hover {
    box-shadow: 2px 2px 5px #808080;
  }
`;
