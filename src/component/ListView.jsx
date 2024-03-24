import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { FormatePrice } from '../helper/FormatePrice';
import {Button} from "../styles/Button"

export const ListView = ({products}) => {
  return (
    <Wrapper className='section'>
        <div className="container grid">
            {
                products.map(curele=>{
                    const {id,name,image,price,description} = curele;
                    return (
                        <div className="card grid grid-two-column" key={id}>
                            <figure>
                                <img src={image} alt="" />
                            </figure>
                            <div className="card-data">
                                <h3>{name}</h3>
                                <p><FormatePrice price={price}/></p>
                                <p>{description.slice(0.90)}</p>
                                <NavLink to={`/singleproducts/${id}`}>
                                <Button>Read more</Button>
                                </NavLink>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
figure img{
    height:100%;
    width:100%;
}

.card-data h3{
    font-weight:600;
    font-size:20px;
    margin-bottom:10px;
}
.card-data p{
    margin-bottom:10px;
}
`