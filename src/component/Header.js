import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from './Nav';

export const Header = () => {
  return (
    <MainHeader className='head'>
        <NavLink to={"/"}>
            <img className='logo' src='./images/logo.png' alt=''/>
        </NavLink>
        <Nav/>
    </MainHeader>
  )
};

const MainHeader = styled.header`
display:flex;
justify-content:space-between;
align-items:center;
padding:0 4.8rem;
height:8rem;
background-color:${({theme})=> theme.colors.bg};
position:relative;

.logo{
    height:5rem;
}
`
