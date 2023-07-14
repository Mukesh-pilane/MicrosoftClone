import React from 'react'
import  styled from 'styled-components'
import logo from '../assets/images/logo.png'

const NavContainer = styled.div`
height:56px;
display:flex;
align-items:center;
padding:0 5.2rem 0 5.2rem;
justify-content: space-between;

`


const NavLogo = styled.img`
width:108px;
margin-right: 1.8rem;

`

const NavLinksProductsContainer = styled.div`
display:flex;
align-items:center;
`
const NavLinksProducts = styled.li`
text-decoration:none;
list-style-type:none;
margin-right: 1.5rem;
font-family:"Segoe UI";
font-size: 13px;

  &:last-child {
    margin-right: 0;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    

    &:hover {
      text-decoration: underline;
    }
  }
`

const NavLinksServiceContainer = styled.div`
display:flex;
list-style-type:none;

`
const NavLinksService = styled.li`
text-decoration:none;
margin-right: 1rem;
font-family:"Segoe UI";
font-size: 13px;
  &:last-child {
    margin-right: 0;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`
const Navbar = () => {
  return (
    <NavContainer>
        <NavLinksProductsContainer>
        <NavLogo src={logo} alt="logo"/>
            <NavLinksProducts>
                Microsoft 365
            </NavLinksProducts>
            <NavLinksProducts>
                Teams
            </NavLinksProducts>
            <NavLinksProducts>
                Windows
            </NavLinksProducts>
            <NavLinksProducts>
                Surface
            </NavLinksProducts>
            <NavLinksProducts>
                Xbox
            </NavLinksProducts>
            <NavLinksProducts>
                Support
            </NavLinksProducts>
        </NavLinksProductsContainer>
        
        <NavLinksServiceContainer>
            <NavLinksService>
                All Microsoft
            </NavLinksService>
            <NavLinksService>
                Saerch
            </NavLinksService>
            <NavLinksService>
                Cart
            </NavLinksService>
        </NavLinksServiceContainer>
    </NavContainer>
  )
}

export default Navbar