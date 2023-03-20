// import { async } from "@firebase/util";
import { createContext } from "react";
import { auth, googleProvider } from "@/config/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import useAuth from "@/utils/useAuth";

export const authContext = createContext({
  currentUser: null,
  googleLoginHandler: async () => {},
  logout: async () => {},
});

export default function AuthContextProvider({ children }) {
  const currentUser = useAuth();

  async function googleLoginHandler() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      throw error;
    }
  }

  function logout() {
    signOut(auth);
  }

  const values = {
    currentUser,
    googleLoginHandler,
    logout,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
}
