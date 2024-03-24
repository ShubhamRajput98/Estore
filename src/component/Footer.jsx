import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import {BsDiscord,BsInstagram,BsYoutube} from 'react-icons/bs'

export const Footer = () => {
  return (
    <Wrapper>
        <div className="upper-footer">
            <div className="content">
                <p>Ready to get started.</p>
                <p>Talk to us today?</p>
            </div>
            <div className="content">
                <Button>GET STARTED</Button>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Thapa Store</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste iusto minima</p>
                </div>
                <div className="col">
                    <h3>Subscribe to get importen update</h3>
                    <input type="email" placeholder='E-mail' />
                    <Button>SUBSCRIBE</Button>
                </div>
                <div className="col">
                    <h3>Follow us</h3>
                    <div className="social-icons">
                        <a href="#"><BsDiscord/></a>
                        <a href="#"><BsInstagram/></a>
                        <a href="#"><BsYoutube/></a>
                    </div>
                </div>
                <div className="col">
                    <h3>Call us</h3>
                    <p>+91 9131138398</p>
                </div>
            </div>
        </div>

        <hr/>

        <div className="bottom-footer">
            <p>@{new Date().getFullYear()} Tahpa Store All Rights Reserved</p>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
    position:relative;
    background:${({theme})=>theme.colors.footer_bg};
    padding-top:5em;
    padding-bottom:3em;
    margin-top:8em;

    .upper-footer{
        background:${({theme})=>theme.colors.bg};
        position:absolute;
        width:60vW;
        left:50%;
        top:-5em;
        padding:2em;
        transform: translateX(-50%);
        border-radius:10px;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

    .row{
        display:flex;
        flex-wrap:wrap;
        padding:5em 0;
    }
    .col{
        gap:20px;
        color:white;
        padding:1em;
        width:calc(1200px/4);
    }
    .col:nth-child(2){
        display:flex;
        flex-direction: column;
        
    }

    .social-icons{
        display:flex;
        padding-top:2em;
        gap:20px;
    }
    .social-icons a{
        height:40px;
        width:40px;
        text-align:center;
        line-height:45px;
        border:2px solid white;
        border-radius:50%;
        color:white;
        font-size:25px;
    }

    .col p{
        color:white;
        padding-top:0.5em;
    }

    .bottom-footer p{
        color:white;
        text-align:center;
        padding-top:1em;
    }
`
