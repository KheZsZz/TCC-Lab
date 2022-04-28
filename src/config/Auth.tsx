import type { Users } from "../types/type_users";

import { createContext, useState } from "react";
import { api } from '../config/config';
import { sign } from 'jsonwebtoken';
import Router  from "next/router";
import { setCookie } from 'nookies';

type SingInData = {
  email:string,
  password:string
}

type AuthContextType = {
  isAuthenticated:boolean,
  user:Users | null,
  SingIn:(data:SingInData) =>Promise<void>
}


export const AuthContext = createContext({} as AuthContextType);

export const Auth = ({children}:any) => {

  const [user, setUser] = useState<Users | null>(null);
  const isAuthenticated = !!user;

  const SingIn  = async ({email, password}:SingInData) => {
    //chamada API
    try{
      
      setUser(await api.get(`/users/user/${email}`));
      
      if(isAuthenticated){
        const token = sign(String(user?.id), "1234");
        if(password !== user.password){
          setCookie(undefined, 'token', token, {
            maxAge: 60 * 60 * 1 // 1h
          });
          Router.push('/');
        }
      }else {
        console.log("not")
      }
    } catch(error){
      console.error(error)
      Router.push('/login')
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, SingIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}