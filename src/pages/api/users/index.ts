//import types
import { NextApiRequest, NextApiResponse } from 'next';
import { manisfest } from '../../../config/config';

//import sys
import { sql_query } from '../../../config/database';

//types 
import { Users } from '../../../types/type_users';


const Handle = async (req:NextApiRequest, res:NextApiResponse)  => {
    const users:Users = req.body;

    switch(req.method){

        case "GET":
            const data = await sql_query<Users>(
                `SELECT * FROM ${manisfest.tablesBD.Users.users}`,
                []);
            res.status(200).json( data );
        break;

        case "POST":
            const insertData = await sql_query<any>(
                `INSERT INTO ${manisfest.tablesBD.Users.users} VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)`,
                [
                    null,
                    1,
                    1,
                    users.name,
                    users.last_name,
                    users.cpf,
                    users.rg,
                    users.phone,
                    users.email,
                    users.password,
                    1
                ]);
            res.status(200).json({message:`Usuário inserido com sucesso! userId: ${insertData?.insertId}`});
        break;

        default:
            res.status(404).json( { message:'Sorry! Bad request error 404' } )
    }
}
export default Handle;