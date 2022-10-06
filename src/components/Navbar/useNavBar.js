import { useAuthContext } from "../../context/authentication/useAuthContext";
import { useLogout } from "../../features/firebase_authentication/useLogout";

export const useNavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return { logout, user };
};
