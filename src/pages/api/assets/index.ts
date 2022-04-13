//import types
import { NextApiRequest, NextApiResponse } from 'next';

//import sys
import { sql_query } from '../../../config/database';

//types 
import { Assents } from '../../../types/types_stock';

const Handle = async (req:NextApiRequest, res:NextApiResponse)  => {
    const method = req.method;
    const assets:Assents = req.body;

    switch(method){

        case "GET":
            const count = req.method
            if(count == "count"){
                const data = await sql_query<Assents>(
                    'SELECT COUNT(id) FROM property_tbl',
                    []);
                res.status(200).json(data);
            } else {
                const data = await sql_query<Assents>(
                    'SELECT * FROM property_tbl ORDER BY id DESC LIMIT 10',
                    []);
                res.status(200).json(data);
            }
        break;

        case "POST":

        // res.status(200).json(assets);
            const insertData = 
            await sql_query<Assents>(`INSERT INTO property_tbl(property_number, property_serial_number, name, brand, model, lot, nf, complement, value_property) VALUES (?,?,?,?,?,?,?,?,?)`,
            [
                Number(assets.assent_number),
                assets.serial_number, 
                assets.assent_name, 
                assets.brand,
                assets.model, 
                Number(assets.product_batch), 
                Number(assets.tax_invoice), 
                assets.complement,
                Number(assets.value_assent)
            ]);

            res.status(200).json({data:insertData?.id});
        break;

        default:
            res.status(404).json( { message:'Sorry! Bad request error 404' } )
    }
}
export default Handle;