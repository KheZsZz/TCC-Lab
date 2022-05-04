import { createContext } from 'react';
import { api } from '../config/config';
import { sign } from 'jsonwebtoken';
import { setCookie } from 'nookies';
import Router from 'next/router';

type SingInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  SingIn: (data: SingInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export const Auth = ({ children }: any) => {
  const SingIn = async ({ email, password }: SingInData) => {
    try {
      const isAuthenticated = await api.post('users/singIn/', {
        email,
        password,
      });
      if (isAuthenticated.status === 200) {
        const token = sign(isAuthenticated.data.userId, '8486', {
          expiresIn: 60 * 1, // 1 min
        });
        setCookie(undefined, 'labs_user_token', token);
        Router.push('/');
      }
    } catch (error) {
      alert('Email or passord invalid');
    }
  };
  return (
    <AuthContext.Provider value={{ SingIn }}>{children}</AuthContext.Provider>
  );
};
