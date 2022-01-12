import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import type {Laboratorio} from '../utils/types/lab_types'

import styles from '../styles/Home.module.css'

//Exemplo

const Home: NextPage = ( props : InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div className={styles.container}>
      <form>
        <input type="text" name="nome" placeholder='nome:'/>

      </form><br/>
      <div>
        {
          props.labs.data.map((item:Laboratorio)=> (
            <div key={item.id}>
              <h4>{item.nome}</h4>
              <p>{item.tipo}</p>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export const getStaticProps:GetStaticProps  = async () => {
  const res = await fetch("http://localhost:3000/api/hello",{method:"GET"}); //busca dados na API
  const labs:Laboratorio[] = await res.json(); 

  return {
    props:{
      labs,
    }
  }
}

export default Home;
