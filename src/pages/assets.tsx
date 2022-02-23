import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Assets } from "../types/types_inventory";

const Assets = ({ props }:InferGetStaticPropsType <typeof getStaticProps>) => {

    if(props) {
        return(
            <h2>up</h2>
        )
    }else {
        return (
            <h1>Loadding...</h1>
        )
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