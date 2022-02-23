//Types
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Assets } from "../types/types_inventory";

//styles
import Styles from '../styles/assets.module.css'; 

//components
import { Loadding } from '../components/loadding';

//hooks
import { useForm } from "react-hook-form";

const Assets = ({ props }:InferGetStaticPropsType <typeof getStaticProps>) => {

    const {register, handleSubmit} = useForm<Assets>();

    if(props) {
        return(
            <div>
                <form>
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
                    />
                    <input 
                        { ...register('name') }
                        name='name'
                        type = 'text'
                    />
                    <input 
                        { ...register('brand') }
                        name='brand'
                    />
                    <input 
                        { ...register('model') }
                        name='model'
                        type = 'text'
                    />
                    <input 
                        { ...register('lot_number') }
                        name='lot_number'
                        type = 'number'
                    />

                </form>
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