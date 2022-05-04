import { NextPage } from "next";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../config/Auth";
import { api } from "../config/config";

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
          {...register("email")}
          type="email"
          name="email"
          placeholder="E-mail:"
        />
        <br />
        <input
          {...register("password")}
          type="password"
          name="password"
          placeholder="Password:"
        />
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Login;
