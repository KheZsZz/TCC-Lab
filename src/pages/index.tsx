// Types
import type { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from "next";

//Styles
import styles from "../styles/assets.module.css"; // todos os estilos...

//import system
import { useForm } from 'react-hook-form';
import { manisfest } from '../config/config';
import { Assets } from "../types/types_inventory";
import Table from "../components/table";
import { useEffect, useState } from "react";

type Count = {
  count:number | Response
}

const Home: NextPage = () => {
  const {register, handleSubmit} = useForm<Assets>();
  const [values, setData] = useState<Assets>();

   const singIn = async (data:Assets) => {
    await fetch(`${manisfest.base_url}assets/`,{
      method:"POST",
      headers:{
        'Content-Type':'Application/json'
      },
      body:JSON.stringify(data)
    });
    setData(data)
  }
    return (  
      <div>
        <form onSubmit= { handleSubmit(singIn) }  className={styles.container}>
          <div>
            <input {...register('name')} type="text" name="name" placeholder="name asset" required />
            <input {...register('brand')} type="text" name="brand" placeholder="brand" required/>
            <input {...register('model')} type='text' name='model' placeholder="model" required/>
            <input {...register('complement')} type="text" name-='complement' placeholder="complement"/>
          </div>
          <div>
            <input { ...register('property_number') }type="number" name="property_number" placeholder="Number to property:" required/>
            <input {...register('property_serial_number')} type='text' name='property_serial_number' placeholder="Serial number" required/>
            <input {...register('lot')} type='number' name='lot' placeholder="Lot" required/>
            <input {...register('nf')} type='number' name='nf' placeholder="Nota Fiscal" required/>
          </div>
          <div>
            <input {...register('value_property')} type='number' name="value_property" placeholder="value" required/>
          </div>
          <button type="submit"> Sing In </button>
        </form>
        <Table status={values?.property_number}/>
      </div>
    );
}

export default Home;
