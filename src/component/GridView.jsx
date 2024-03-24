import React from 'react'
import styled from 'styled-components'
import {Product} from "./Product"

export const GridView = ({products}) => {
  return (
    <Wrapper>
        <div className="container grid grid-three-column">
            {
                products.map((curEle)=>{
                    return <Product key={curEle.id} {...curEle}/>
                })
            }
        </div>
    </Wrapper>
  )
}

const Wrapper= styled.div`
figure{
    position:relative;
    color:black;
}

figure img{
    width:100%;
}
.card-data-flex{
    display:flex;
    justify-content:space-between;
    color:black;
    padding:0.5em 0;
}
`