import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PageNavigation = ({title}) => {
  return (
    <Wrapper>
        <NavLink to={"/"}>Home</NavLink>/{title}
    </Wrapper>
  )
}

const Wrapper= styled.section`
  padding:2em;
  font-size:2em;
  
`
