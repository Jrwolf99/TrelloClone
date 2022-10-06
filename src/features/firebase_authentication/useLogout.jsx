import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../context/authentication/useAuthContext";
import { projectAuth } from "../firebase_config/config";




//USELOGOUT: use this hook to access the firebase logout.
export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = async () => {
        setError(null);
        setIsPending(true);

        //sign the user out
        try {
            await signOut(projectAuth);
            dispatch({ type: "LOGOUT" });
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

    return { logout, error, isPending };
};
