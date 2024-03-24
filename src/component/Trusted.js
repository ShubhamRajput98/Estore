import React from 'react'
import styled from 'styled-components'

export const Trusted = () => {
  return (
    <Wrapper className='brand-section'>
        <div className="container">
            <h3>Trusted By 1000+ Companies</h3>
            <div className="brand-section-slider">
                <div className="slide">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324" alt="" />
                </div>
                <div className="slide">
                    <img src="https://www.designmantic.com/logo-images/11981.png?company=Company+Name&slogan=&verify=1" alt="" />
                </div>
                <div className="slide">
                    <img src="https://www.kindpng.com/picc/m/390-3909824_business-logo-design-hd-png-download.png" alt="" />
                </div>
                <div className="slide">
                    <img src="https://i.pinimg.com/736x/ea/b3/01/eab301eb1d4bce26a0f40cb0b60c05b3.jpg" alt="" />
                </div>
                <div className="slide">
                    <img src="https://images-platform.99static.com/yirdl3L_SahwfgGu8z-Ro3xDEBU=/500x500/top/smart/99designs-contests-attachments/18/18932/attachment_18932784" alt="" />
                </div>
            </div>
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`

padding:9rem 0;

h3{
    text-align:center;
    font-weight:800;
}

 .brand-section-slider{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:2em 5em;
    flex-wrap:wrap;
 }

 .slide img{
    width:10rem;
    height:10rem;
    filter: grayscale(1);
 }

@media (max-width:${({theme})=> theme.media.mobile}){
    .brand-section-slider{
        justify-content:center;
    }
}
`
