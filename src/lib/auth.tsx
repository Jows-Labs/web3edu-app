// lib/auth.tsx
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "../firebase/config";
// Importe a configuração do Firebase

export const signInWithGoogle = async () => {
  try {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, googleProvider);
    return res.user.getIdToken(true); // Retorna o ID token diretamente
  } catch (err) {
    console.error(err);
    throw err;
  }
};
