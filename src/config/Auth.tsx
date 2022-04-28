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
    try{
      const { data } = await api.get<Users[]>(`/users/user/${email}`);
      data.map((item:Users) =>setUser(item));
      
      if(isAuthenticated){
        if(email === user.email && password === user.password){
          const token = sign(String(user?.id), "1234");
          setCookie(undefined, 'token_labs', token);
          Router.push('/')
        }else {
          alert("Email or password invalid");
        }
      }
    } catch(error){
      console.error(error)
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, SingIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}