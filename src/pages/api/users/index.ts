//import types
import { NextApiRequest, NextApiResponse } from 'next';

//import sys
import { sql_query } from '../../../lib/database';

//types 
import { Users } from '../../../types/types_users';


const Handle = async (req:NextApiRequest, res:NextApiResponse)  => {
    const method = req.method;
    const users:Users = req.body;

    switch(method){

        case "GET":
            const data = await sql_query<Users>(
                'SELECT * FROM usuarios_tbl',
                []);
            res.status(200).json( { data });
        break;

        default:
            res.status(404).json( { message:'Sorry! Bad request error 404' } )
    }
}
export default Handle;