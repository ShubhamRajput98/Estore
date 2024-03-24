import styled from "styled-components";
import { Product } from "./Product";
import { useSelector } from "react-redux";

export const FeatureProducts = () => {
  const { featureProducts } = useSelector((state) => state.products);

  return (
    <Wrapper>
      <div className="container">
        <div className="intro-data">Chek Now!</div>
        <div className="common-heading">Our Feature Servise</div>
        <div className="grid grid-three-column">
          {featureProducts?.length > 0 &&
            featureProducts?.map((item) => <Product key={item.id} {...item} />)}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.bg};
  padding: 2em 0;
  figure {
    position: relative;
  }

  figure img {
    width: 100%;
  }
  .card-data-flex {
    display: flex;
    justify-content: space-between;
    color: black;
    padding: 0.5em 0;
  }
`;
