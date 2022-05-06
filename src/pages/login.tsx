import { NextPage } from 'next';
import Link from 'next/link';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../services/Auth';

type SingInData = {
  email: string;
  password: string;
};

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<SingInData>();
  const { SingIn } = useContext(AuthContext);

  const HandleSingIn = async (data: SingInData) => {
    await SingIn({ email: data.email, password: data.password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(HandleSingIn)}>
        <input
          {...register('email')}
          type="email"
          name="email"
          placeholder="E-mail:"
        />
        <br />
        <input
          {...register('password')}
          type="password"
          name="password"
          placeholder="Password:"
        />
        <br />
        <input type="submit" value="Enviar" />
        <br />
        <Link href="/register">
          <a>Register!</a>
        </Link>
      </form>
    </div>
  );
};

export default Login;
