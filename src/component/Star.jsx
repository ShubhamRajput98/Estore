import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import styled from 'styled-components'

export const Star = ({ stars, reviews }) => {
    const ratingstar = Array.from({ length: 5 }, (ele, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    stars >= index + 1 ? <FaStar className='icons' /> : stars >= number ? <FaStarHalfAlt className='icons' /> : <AiOutlineStar className='icons' />
                }
            </span>
        )
    })
    return (
        <Wrapper>
            <div className="icon-style">
                {ratingstar}

            </div>
            <p>{reviews} Costumer reviews</p>
        </Wrapper>
    )

}

const Wrapper = styled.div`
display:flex;
    align-items:center;
.icon-style{
    display:flex;
    align-items:center;
    font-size:18px;
    color:#f8f825;
}
p{
    margin-left:0.5em;
}
`
