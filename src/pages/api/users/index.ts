import { NextApiRequest, NextApiResponse } from 'next';
import { Users } from '../../../types/type_users';
import { manisfest } from '../../../config/config';
import { sql_query } from '../../../config/database';

const Handle = async (req:NextApiRequest, res:NextApiResponse)  => {
    const users:Users = req.body;
    const { verify } = req.body;

    switch(req.method){
        case "GET":
            const data = await sql_query<Users>(`select * from ${manisfest.tablesBD.Users.users} where verify = ?`,[Number(verify)]);
            if(verify === 1){
                res.status(200).json({message:`Usuários ativos...`, data});
            }else {
                res.status(200).json({message:`Usuários desativados...`, data});
            }
        break;

        case "POST":
            try {
                const insertData = await sql_query<any>(
                    `insert into ${manisfest.tablesBD.Users.users} values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [
                        null,
                        users.address,
                        users.corparate,
                        users.name,
                        users.last_name,
                        users.cpf,
                        users.rg,
                        users.phone,
                        users.email,
                        users.password
                    ]);
                res.status(200).json({message:`Usuário ${insertData?.insertId} inserido com sucesso!`});
            } catch (error) {
                res.status(204).json({message:`Erro ao cadastrar...`});
            }
        break;

        default:
            res.status(404).json( { message:'Sorry! Bad request error 404'} )
    }
}
export default Handle;