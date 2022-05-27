import React, { useState } from 'react'
import styled from "styled-components";
import { useSignup } from '../hooks/Firebase/useSignup';



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

     &>button {
         color: white;
         background: #ffffff3e;
         padding: .3em 1em;
         width: 63%;
         border-radius: 3px;
         margin-bottom: 1rem ;
     }

`;

export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const { signup, error, isPending } = useSignup();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(email, password, displayName)
    }

    return (
        <StyledForm
            onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
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

            <label>
                <input type="text"
                    onChange={(e) => {
                        setDisplayName(e.target.value);
                    }}
                    value={displayName}
                    placeholder="Display Name"
                />
            </label>

            {(!isPending) && <button>Submit</button>}
            {(isPending) && <button disabled>Loading...</button>}
            {error && <p>{error}</p>}

        </StyledForm>
    )
}
