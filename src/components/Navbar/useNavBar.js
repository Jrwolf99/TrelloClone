import { useAuthContext } from "../../context/useAuthContext";
import { useLogout } from "../../firebase/hooks/useLogout";

export const useNavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return { logout, user };
};
