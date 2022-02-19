import { useContext } from "react";
import { AuthContext } from "../store/auth-context";

export const useAuthUser = () => useContext(AuthContext);
