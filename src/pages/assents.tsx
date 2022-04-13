//Types
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Assents } from "../types/types_stock";

//styles
import Styles from '../styles/assents.module.css'; 

//components
import { Loadding } from '../components/loadding';

//hooks
import { useForm } from 'react-hook-form';

const Assents = ({ props }:InferGetStaticPropsType <typeof getStaticProps>) => {

    const {register, handleSubmit} = useForm<Assents>();

    const Regist = (data:Assents) => {
        console.log(data)
    }

    if(props) {
        return(
            <div className={Styles.container}>
                <form className={Styles.form} onSubmit={handleSubmit(Regist)}>
                    <input 
                        { ...register('assent_number') }
                        name = 'assents_number'
                        type = 'number'
                        placeholder = 'Insert assents number'
                    />
                    <input 
                        { ...register('serial_number') }
                        name='serial_number'
                        type = 'text'
                        placeholder = 'Insert serial number'
                    />
                    <input 
                        { ...register('assent_name') }
                        name='name'
                        type = 'text'
                        placeholder = 'Insert assents name'
                    />
                    <input 
                        { ...register('brand') }
                        name='brand'
                        placeholder = 'Insert assents brand'
                    />
                    <input 
                        { ...register('model') }
                        name='model'
                        type = 'text'
                        placeholder = 'Insert assents model'
                    />
                    <input 
                        { ...register('product_batch') }
                        name='product_batch'
                        type = 'number'
                        placeholder = 'Insert assents produtc batch number'
                    />

                    <button type="submit"> Register </button>
                </form>
                
                <div>
                    {props?.data.map( (itens:Assents) => (
                        <div key ={itens.id}>
                            <h2>{itens.assent_name} - {itens.brand} - {itens.model}</h2>
                            <p>Lote: {itens.product_batch}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }else {
        return (
            <Loadding/>
        );
    }

}

const getStaticProps:GetStaticProps = async () => {

    const res = await fetch('/api/assents/',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        },
    });
    const data:Assents = await res.json();

    return{
        props:{
            data
        }
    }
}

export default Assents;