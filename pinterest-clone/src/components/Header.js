import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PinterestIcon from '@mui/icons-material/Pinterest';
// import { CenterFocusStrong } from '@mui/icons-material';
// import { height, padding, style } from '@mui/system';
import IconButton from '@mui/material/IconButton';





function Header() {
  return ( 
      <div>  
      <Wrapper>
          <LogoWrapper>
              <IconButton>
                  <PinterestIcon />
              </IconButton>
          </LogoWrapper>

          <HomePageButton>
              <a href="/">Homepage</a>
          </HomePageButton>
          {/* <Followingbutton>
            <a href="/">Following</a>
          </Followingbutton> */}
          
          {/* <SearchWrapper>
              <SearchBarWrapper>

              </SearchBarWrapper>

              </SearchWrapper>
              <Iconwrapperwrapper>

                </Iconwrapperwrapper> */} 
      </Wrapper> 
     
      </div>
   
  )
}

export default Header

//style the wrapper

const Wrapper = styled.div`
display:flex;
align-items: Center;
height: 56px;
padding: 12px 4px 4px 16px;
background-color: white;
color: black;
`


const LogoWrapper = styled.div`
 .MuiSvgIcon-root {
     color: #0023e6;
     font-size: 32px;
     cursor: pointer;
 }

`
const HomePageButton = styled.div`
display: flex;
height: 48px;
min-width:123px;
align-items: center;
justify-content: center;
border-radius:24px;
cursor: pointer;
background-color: rgb(17, 17, 17);

a{
    text-decoration: none;
    color:white;
    font-weight: 700;
}

`
