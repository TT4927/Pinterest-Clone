import React from 'react';
import styled from 'styled-components';

function Pin() {
  return (
   <Wrapper>
       <Container>
           <img src="https://unsplash.com/photos/PtijYp-PTMI " />

       </Container>
   </Wrapper>
  )
}

export default Pin;

const Wrapper =styled.div`
 display: inline-flex;
 padding: 8px;

`
const Container =styled.div`
 display: flex;
 align-items:center;
 box-size: border-box;
 cursor: pointer;
 width: 236px;

 img {
     display: flex !important;
     width: 100%;
     cursor: zomm-in;
     border-radius: 16px;
     object-fit: cover !important;
 }

`