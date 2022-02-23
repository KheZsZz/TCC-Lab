//Types
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Assets } from "../types/types_inventory";

//styles
import Styles from '../styles/assets.module.css'; 

//components
import { Loadding } from '../components/loadding';

//hooks
import { useForm } from 'react-hook-form';

const Assets = ({ props }:InferGetStaticPropsType <typeof getStaticProps>) => {

    const {register, handleSubmit} = useForm<Assets>();

    const Regist = (data:Assets) => {
        console.log(data)
    }

    if(props) {
        return(
            <div className={Styles.container}>
                <form className={Styles.form} onSubmit={handleSubmit(Regist)}>
                    <input 
                        { ...register('assets_number') }
                        name = 'assets_number'
                        type = 'number'
                        placeholder = 'Insert assets number'
                    />
                    <input 
                        { ...register('serial_number') }
                        name='serial_number'
                        type = 'text'
                        placeholder = 'Insert serial number'
                    />
                    <input 
                        { ...register('name') }
                        name='name'
                        type = 'text'
                        placeholder = 'Insert assets name'
                    />
                    <input 
                        { ...register('brand') }
                        name='brand'
                        placeholder = 'Insert assets brand'
                    />
                    <input 
                        { ...register('model') }
                        name='model'
                        type = 'text'
                        placeholder = 'Insert assets model'
                    />
                    <input 
                        { ...register('lot_number') }
                        name='lot_number'
                        type = 'number'
                        placeholder = 'Insert assets lot number'
                    />

                    <button type="submit"> Register </button>
                </form>
                
                <div>
                    {props?.data.map( (itens:Assets) => (
                        <div key ={itens.id}>
                            <h2>{itens.name} - {itens.brand} - {itens.model}</h2>
                            <p>Lote: {itens.lot_number}</p>
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

    const res = await fetch('/api/assets/',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        },
    });
    const data:Assets = await res.json();

    return{
        props:{
            data
        }
    }
}

export default Assets;