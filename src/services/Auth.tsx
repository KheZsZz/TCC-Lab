import { createContext } from 'react';
import { api } from '../services/api';
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
    const isAuthenticated = await api.post('users/singIn', {
      email,
      password,
    });
    switch (isAuthenticated.status) {
      case 200:
        setCookie(undefined, 'labs_token', isAuthenticated.data.token, {
          maxAge: 60 * 60 * 1,
        });
        Router.push('/');
        break;
      default:
        alert({ message: `Email or password invalided` });
    }
  };
  return (
    <AuthContext.Provider value={{ SingIn }}>{children}</AuthContext.Provider>
  );
};
