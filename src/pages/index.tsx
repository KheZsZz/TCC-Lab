// Types
import type { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from "next";

//Styles
import styles from "../styles/assets.module.css"; // todos os estilos...

//import system
import { useForm } from 'react-hook-form';


//types page

// OBS :: implementar graphQl para trazer apenas os dados necessários para cada pagina...

import { manisfest } from '../config/config';
import { Assets } from "../types/types_inventory";
import Router from "next/router";


const Home: NextPage = ( props: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const {register, handleSubmit} = useForm<Assets>();

  // Verificar o TOKEN_ID nos cookies se está valido....
  // caso não esteja SingIn ? /dashboard ... 

  const singIn = async (data:Assets) => {
    
    await fetch(`${manisfest.base_url}assets/`,{
      method:"POST",
      headers:{
        'Content-Type':'Application/json'
      },
      body:JSON.stringify(data)
    });

    //Router.replace(Router.asPath);
    
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
      
      <div>

        <form onSubmit= { handleSubmit(singIn) }  className={styles.container}>
        
          {/* Pegar dois campos (email e senha) e enviar*/}

          <div>
            <input
              {...register('name')}
              type="text"
              name="name"
              placeholder="name asset"
            />
            <input
              {...register('brand')}
              type="text"
              name="brand"
              placeholder="brand"
            />
            <input
              {...register('model')}
              type='text'
              name='model'
              placeholder="model"
            />
            <input
              {...register('complement')}
              type="text"
              name-='complement'
              placeholder="complement"
            />
          </div>
          <div>
            <input 
              { ...register('property_number') }
              type="number" 
              name="property_number" 
              placeholder="Number to property:"
            />
            <input
              {...register('property_serial_number')}
              type='text'
              name='property_serial_number'
              placeholder="Serial number"
            />
            <input
              {...register('lot')}
              type='number'
              name='lot'
              placeholder="Lot"
            />
            <input 
              {...register('nf')}
              type='number'
              name='nf'
              placeholder="Nota Fiscal"
            />
          </div>
          <div>
            <input
              {...register('value_property')}
              type='number'
              name="value_property"
              placeholder="value"
            />
          </div>

          <button 
            type="submit"
            // button submit 
          > 
            Sing In 
          </button>

        </form>

        <div className={styles.container}>
          {
            props?.data?.map((item:Assets) => (
              <div key={item.id} className={styles.listProperty}>
                <h4>{item.name}</h4>
                <h4>{item.model}</h4>
                <h4>{item.property_serial_number}</h4>
                <h4>R$ {item.value_property}</h4>
              </div>
            ))
          }
        </div>
      </div>
    );
  };
}

export const getServerSideProps: GetServerSideProps = async () => {

  const res = await fetch(`${manisfest.base_url}assets/`,{
    method:"GET",
    headers:{
      'Content-Type': 'application/json'
    }
  })

  const data = await res.json();

  return {
    props: {
      data:data.data
    },
  };
};

export default Home;
