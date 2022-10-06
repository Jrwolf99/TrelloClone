import { useState } from "react";
import { useSignup } from "../../features/firebase_authentication/useSignup";

export const useSignUpPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const { signup, error, isPending } = useSignup();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(email, password, displayName)
    }


    return {
        email,
        setEmail,
        password,
        setPassword,
        displayName,
        setDisplayName,
        error,
        isPending,
        handleSubmit
    };



}