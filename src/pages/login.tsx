import { NextPage } from "next";
import { useForm } from 'react-hook-form';
import { api } from "../config/config";

type SingInData = {
  email:string,
  password:string
}


const Login:NextPage = () => {
  const { register, handleSubmit } = useForm<SingInData>();

  const SingIn = async (data:SingInData) => {
    const user = await api.get(`users/user/${data.email}`);
    console.log(user);
  }

  return(
    <div>
      <form onSubmit={handleSubmit(SingIn)}>
        <input 
          {...register('email')}
          type="email" 
          name="email"
          placeholder="E-mail:"
        />
        <br/>
        <input
          {...register('password')}
          type="password"
          name="password"
          placeholder="Password:"
        />
        <br/>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  );
}


export default Login;