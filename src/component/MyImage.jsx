import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

export const MyImage = ({imgs = [{url:""}]}) => {

  const [mainImg,setMainImg] = useState(imgs[0])

  return (
    <Wrapper>
      <div className="grid grid-four-rows">
          {imgs.map((item,i)=>
             <figure key={i}>
                <img src={item.url} onClick={()=>setMainImg(item)} 
                alt="img" className='box-image--style'  />
            </figure>
          )}
      </div>

      <div className="main-sreen">
        <img src={mainImg.url} alt="img" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display:grid;
  grid-template-columns:0.4fr 1fr;
  align-items:center;
  gap:1em;

  img{
    max-width:80%;
  }
  .grid{
    flex-direction:column;
    justify-items:center;
    align-items:center;
    width:100%;
    gap:1rem;

   
    .grid-four-rows{
      grid-template-rows: 1fr 1.2fr .5fr .8fr ;
    }
  }
`
