import React, { useState, createContext } from "react";
import { loginUser, LoginUserProps } from "./authentication.service";

export interface AuthenticationState {
  user: any;
  isLoading: boolean;
  error: string;
  onLogin: (props: LoginUserProps) => void;
}

const initialState: AuthenticationState = {
  user: {},
  isLoading: false,
  error: "",
  onLogin: () => {
    console.log("Logining");
  },
};

export const authenticationContext = createContext(initialState);

export interface AuthenticationContextProps {
  children: React.ReactElement;
}

export const AuthenticationContextProvider = ({
  children,
}: AuthenticationContextProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

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

  return (
    <authenticationContext.Provider value={{ user, isLoading, error, onLogin }}>
      {children}
    </authenticationContext.Provider>
  );
};
