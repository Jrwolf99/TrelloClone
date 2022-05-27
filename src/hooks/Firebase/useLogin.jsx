import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { projectAuth } from "../../firebase/config"
import { useAuthContext } from "../useAuthContext";


export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setError(null);
        setIsPending(true);

        //log the user in
        try {
            const res = await signInWithEmailAndPassword(projectAuth, email, password);
            dispatch({ type: "LOGIN", payload: res.user });

            if (!isCancelled) {
                setIsPending(false);
                setError(null);
            }
        } catch (error) {
            if (!isCancelled) {
                console.log(error.message);
                setError(error.message);
                setIsPending(false);
            }
        }
    };

    useEffect(() => {
        return () => {
            setIsCancelled(true);
        };
    }, []);

    return { login, error, isPending };
};
