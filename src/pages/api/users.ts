//Route Labs
//import types
import { NextApiRequest, NextApiResponse } from 'next';

//import sys
import { sql_query } from '../../lib/database';


//types 
type Users = {
    id:number,
    nome:string,
    sobrenome:string
    email:string,
    password:string,
    cpf:string,
    rg: string,
    cetegoria:string
}

const Handle = async (req:NextApiRequest, res:NextApiResponse)  => {
    const method = req.method;
    const users:Users = req.body;

    switch(method){

        case "GET":
            const data = await sql_query(
                'SELECT * FROM users',
                []);
            res.status(200).json( { data } );
        break;

        default:
            res.status(404).json( { message:'Sorry! Bad request error 404' } )
    }
}
export default Handle;