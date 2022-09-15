import { useState } from "react";
import { useLogin } from "../../hooks/Firebase/useLogin";

export const useLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    error,
    isPending,
    login,
  };
};
