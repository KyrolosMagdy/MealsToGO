import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { app } from "../../utils/configs/firebaseConfig";

export interface LoginUserProps {
  email: string;
  password: string;
}

export const auth = getAuth(app);

export const loginUser = ({ email, password }: LoginUserProps) =>
  signInWithEmailAndPassword(auth, email, password);
