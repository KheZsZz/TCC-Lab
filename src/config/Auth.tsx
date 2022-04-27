import type { Users } from "../types/type_users";

import { createContext } from "react";
import { api } from '../config/config';

type SingInData = {
  email:string,
  password:string
}

type AuthContextType = {
  isAuthenticated:boolean;
}

export const Auth = ({children}:any) => {

  const AuthContext = createContext({} as AuthContextType);
  const isAuthenticated = false;

  const SingIn  = async ({email, password}:SingInData) => {
    //chamada API
    const user:Users = await api.get(`/users/${email}/${password}`);
    console.log(user);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}