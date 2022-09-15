import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/LOGOsmall.svg"
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/Firebase/useLogout';


const StyledNav = styled.nav`
background: #0000002a;
font-size: 1rem;
font-weight: 300;
color: #ffffffc3;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 3em;

&>div {
    display: flex;
    justify-content: center;
    align-items: center;
}


`;


const StyledLogoWrapper = styled.div`
margin: .4rem;
gap: 10px;
&>img {
    width: 45px;
    filter: brightness(90%);
}
`;


const StyledMenuWrapper = styled.div`
    gap: 30px;
    &>p {
        @media (max-width: 900px) {
        display: none;
         }
    }
   

`;



const StyledButtonWrapper = styled.div`
    color: white;
    &>* {
        padding: .5em;
        margin: .5rem .3rem;
        background-color: #ffffff39;
        border-radius: 3px;
        transition: all .05s;
    }
    *:hover{
        background-color: #eaeaea39;
    }

`;





export default function Navbar() {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    return (
        <StyledNav>
            <StyledLogoWrapper>
                <img src={logo} alt='coffeehaus logo' />
                <h2>CoffeeHaus</h2>
            </StyledLogoWrapper>
            <StyledMenuWrapper>
                {user && <p>Hello {user.displayName}</p>}
                <StyledButtonWrapper>
                    {!user && (<>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>)}
                    {user &&
                        <button
                            onClick={logout}>
                            Logout
                        </button>

                    }
                </StyledButtonWrapper>
            </StyledMenuWrapper>



        </StyledNav>
    )
}
