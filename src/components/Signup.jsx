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

`;



export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const { signup, error, isPending } = useSignup();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(email, password)
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


            {(!isPending) && <button className='btn'>Submit</button>}
            {(isPending) && <button className='btn' disabled>Loading...</button>}
            {error && <p>{error}</p>}

        </StyledForm>
    )
}
