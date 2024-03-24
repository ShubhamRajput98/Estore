import React, { useEffect } from "react";
import styled from "styled-components";
import { FilterSection } from "../component/FilterSection";
import { Sort } from "../component/Sort";
import { ProductList } from "../component/ProductList";
import { Circles } from "react-loader-spinner";
import { GetProducts } from "../redux/actions";
import { useSelector } from "react-redux";

export const Products = () => {
  const { loading } = useSelector((state) => state.products);
  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <div className="loader">
          {" "}
          <Circles
            height="100"
            width="100"
            color="blue"
            ariaLabel="circles-loading"
            wrapperStyle={{ className: "loader" }}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="container grid grid-filter-column">
          <div>
            <FilterSection />
          </div>

          <div className="product-view--sort">
            <div className="sort-filter">
              <Sort />
            </div>
            <div className="main-product">
              <ProductList />
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
  .loader {
    height: 100vh;
    width: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
