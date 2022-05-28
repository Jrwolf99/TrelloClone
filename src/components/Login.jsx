import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useLogin } from '../hooks/Firebase/useLogin';

const StyledForm = styled.form`

    max-width: 360px;
    margin: 60px auto;
    text-align: center;
    padding: 20px;
    background-color: #ffffff1c;
    border-radius: 5px;

    &>h2 {
        color: white;
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
    font-size: 1em;
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
        font-size: .6rem;
         padding: .3em 1em;
         border-radius: 3px;
`;



export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isPending } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);

    }

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
