import styled from "styled-components";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { PageNavigation } from "../component/PageNavigation";
import { Container } from "../styles/Container";
import { MyImage } from "../component/MyImage";
import { FormatePrice } from "../helper/FormatePrice";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { Star } from "../component/Star";
import { AddToCart } from "../component/AddToCart";
import { Circles } from "react-loader-spinner";
import { GetSingleProducts } from "../redux/actions";
import { useSelector } from "react-redux";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { singleProduct, loading } = useSelector((state) => state.products);
  let { stock, image, name, price, stars, reviews, company } = singleProduct;
  const { id } = useParams();

  useEffect(() => {
    GetSingleProducts(`${API}?id=${id}`);
  }, [id]);

  if (loading) {
    return (
      <Loader>
        {" "}
        <Circles
          height="100"
          width="100"
          color="blue"
          ariaLabel="circles-loading"
          visible={true}
        />
      </Loader>
    );
  }

  return (
    <Wrapper>
      <PageNavigation title={"single product"} />
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <MyImage imgs={image} />
          </div>
          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <p className="product-data-price">
              MRP:
              <del>
                <FormatePrice price={price} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day:{" "}
              <FormatePrice price={price - (price * 20) / 100} />
            </p>
            <p>{"description"}</p>

            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 days replascement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa delever</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 years warranty</p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                <span>Available:</span>{" "}
                {stock > 0 ? "In Stock" : "Not Available"}
              </p>
              <p>
                Id: <span>{id}</span>
              </p>
              <p>
                Brand: <span>{company}</span>
              </p>
            </div>

            <hr />

            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Loader = styled.div`
  height: 100vh;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product_images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
