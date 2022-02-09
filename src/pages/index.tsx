// Types
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

//Styles
import styles from "../styles/Home.module.css"; // todos os estilos...

//import system
import { useForm } from 'react-hook-form';

//types page
type SingIn = {
  email:string
  password:string
}

// OBS :: implementar graphQl para trazer apenas os dados necessários para cada pagina...

const Home: NextPage = ( props: InferGetStaticPropsType<typeof getStaticProps>) => {

  const {register, handleSubmit} = useForm<SingIn>();

  // Verificar o TOKEN_ID nos cookies se está valido....
  // caso não esteja SingIn ? /dashboard ... 

  const singIn = async (data:SingIn) => {
    //pega os dados de acesso e verifica se está cadastrado...
    console.log(data, props);
  }


  if(false){ // verifica se a Token ID (alterar para o token)
    // nunca entra nesse if como false...
    return(

      <div>

        <h1>Sorry! Not alowedd</h1>

      </div>

    );
  } else {

    return (
      <div className={styles.container}>

        <form onSubmit= { handleSubmit(singIn) }>
        
          {/* Pegar dois campos (email e senha) e enviar*/}

          <input 
            { ...register('email') }
            type="email" 
            name="email" 
            placeholder="E-mail:"
            //campo de email
          />

          <br/>

          <input
            { ...register('password') }
            type='password'
            name='password'
            placeholder="Password:"
            //campo password
          />

          <br/>

          <button 
            type="submit"
            // button submit 
          > 
            Sing In 
          </button>

        </form>

      </div>
    );
  };
}
export const getStaticProps: GetStaticProps = async () => {

  //pegar todos os usuarios... (fetch api)

  return {
    props: {
      //passar os usuarios
    },
  };
};

export default Home;
