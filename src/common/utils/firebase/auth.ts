import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "@/utils/firebase";

export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

export const logOut = () => {
  signOut(auth);
};
