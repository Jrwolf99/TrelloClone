import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from "../assets/images/LOGOsmall.svg"




const StyledNav = styled.nav`
background: #0000002a;
font-size: 1rem;
font-weight: 300;
color: #ffffffc3;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 3em;
`;


const StyledLogoWrapper = styled.div`
margin: .4rem;
display: flex;
align-items: center;
gap: .6rem;
&>img {
    width: 45px;
    filter: brightness(90%);
}
`;


const StyledButtonWrapper = styled.div`
    color: white;
    &>* {
        padding: .5em;
        margin: .5rem .3rem;
        background-color: #ffffff39;
        border-radius: 3px;
    }
`;





export default function Navbar() {
    return (
        <StyledNav>
            <StyledLogoWrapper>
                <img src={logo} alt='coffeehaus logo' />
                <h2>CoffeeHaus</h2>
            </StyledLogoWrapper>
            <StyledButtonWrapper>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </StyledButtonWrapper>

        </StyledNav>
    )
}
