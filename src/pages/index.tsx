import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import styles from "../styles/Home.module.css";
import { useForm } from 'react-hook-form';

//Exemplo
type SingIn = {
  email:string
  password:string
}

const Home: NextPage = ( props: InferGetStaticPropsType<typeof getStaticProps>) => {

  const {register, handleSubmit} = useForm<SingIn>();

  const singIn = async (data:SingIn) => {
    console.log(data);
  }


  return (
    <div className={styles.container}>

      <form onSubmit= { handleSubmit(singIn) }>

        <input 
          { ...register('email') }
          type="email" 
          name="email" 
          placeholder="E-mail:"
        />

        <br/>

        <input
          { ...register('password') }
          type='password'
          name='password'
          placeholder="Password:"
        />

        <br/>
        
        <button type="submit"> Sing In </button>

      </form>

    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
      
    },
  };
};

export default Home;
