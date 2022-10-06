import React from 'react'
import styled from "styled-components";
import { useLoginPage } from './useLoginPage';

const StyledForm = styled.form`

    max-width: 360px;
    margin: 60px auto;
    text-align: center;
    padding: 20px;
    background-color: #ffffff1c;
    border-radius: 5px;

    &>h2 {
        color: white;
        font-size: 2rem;
    }
    &>p {
        color: #580000;
        font-size: .8rem;
    }

    &> label {
    display: block;
    margin: 30px auto;
    }
    &> input {
    padding: 8px 6px;
    font-size: 2em;
    color: #777;
    width: 100%;
     }

     &>button:nth-of-type(1) {
         color: white;
         background: #ffffff3e;
         padding: .3em 1em;
         width: 63%;
         border-radius: 3px;
         margin-bottom: 1rem ;
       transition: .05s all;
        }

     &>button:nth-of-type(1):hover {
        background: #ebebeb3c;

     }

`;
const StyledContinue = styled.button`
        display: block;
        margin: auto;
        font-size: 1rem;
        padding: .3em 1em;
        border-radius: 3px;
        color: white;

        &:hover {
            background-color: #ffffff16;
        }


`;

export default function LoginPage() {

    const { email, password, setEmail, setPassword, handleSubmit, error, isPending, login } = useLoginPage();
    return (
        <StyledForm
            onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
                <input type="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    value={email}
                    placeholder="Email"
                />
            </label>
            <label>
                <input type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                    placeholder="Password"
                />
            </label>
            {(!isPending) && <button>Submit</button>}
            {(isPending) && <button disabled>Loading...</button>}
            {error && <p>{error}</p>}

            <StyledContinue to="/" type='button'
                onClick={
                    () => {
                        login("demo@demo.com", 123456);
                    }
                }

            >Continue as Guest</StyledContinue>


        </StyledForm>
    )
}
