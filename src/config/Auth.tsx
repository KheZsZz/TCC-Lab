import type { Users } from "../types/type_users";

import { createContext, useState } from "react";
import { api, manisfest } from '../config/config';
import { sign } from 'jsonwebtoken';
import Router  from "next/router";
import { setCookie } from 'nookies';

type SingInData = {
  email:string,
  password:string
}

type AuthContextType = {
  SingIn:(data:SingInData) =>Promise<void>
}


export const AuthContext = createContext({} as AuthContextType);

export const Auth = ({children}:any) => {

  const SingIn  = async ({email, password}:SingInData) => {
    try {
      const isAuthenticated = await api.post('users/singIn/',{email, password})
      isAuthenticated.status == 200 ? Router.push('/') : Router.push('/register');
    } catch (error) {
      console.log(error)
    }  
  }
  return (
    <AuthContext.Provider value={{ SingIn }}>
      {children}
    </AuthContext.Provider>
  );
}