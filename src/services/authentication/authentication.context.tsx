import React, { useState, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { loginUser, LoginUserProps, auth } from "./authentication.service";

export interface AuthenticationState {
  user: any;
  isLoading: boolean;
  error: string;
  onLogin: (props: LoginUserProps) => void;
  onRegister: (props: OnRegisterProps) => void;
  onLogout: () => void;
}

const initialState: AuthenticationState = {
  user: {},
  isLoading: false,
  error: "",
  onLogin: () => {
    console.log("Logining");
  },
  onRegister: (props: OnRegisterProps) => {
    console.log("Initializing");
  },
  onLogout: () => {
    console.log("Initializing");
  },
};

export const authenticationContext = createContext(initialState);

export interface AuthenticationContextProps {
  children: React.ReactElement;
}

export interface OnRegisterProps {
  email: string;
  password: string;
  repeatedPassword: string;
}

export const AuthenticationContextProvider = ({
  children,
}: AuthenticationContextProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
    setIsLoading(false);
  });

  const onLogin = async ({ email, password }: LoginUserProps) => {
    setIsLoading(true);
    try {
      const res = await loginUser({ email, password });
      setUser(res);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message.toString());
    }
    setIsLoading(false);
  };

  const onRegister = ({
    email,
    password,
    repeatedPassword,
  }: OnRegisterProps) => {
    if (password !== repeatedPassword) {
      setError("Error: passwords don't match");
      return;
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res);
        setError("");
      })
      .catch((error) => {
        setError(error.message.toString());
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        return setUser({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <authenticationContext.Provider
      value={{ user, isLoading, error, onLogin, onRegister, onLogout }}
    >
      {children}
    </authenticationContext.Provider>
  );
};
