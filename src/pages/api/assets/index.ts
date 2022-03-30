//import types
import { NextApiRequest, NextApiResponse } from 'next';

//import sys
import { sql_query } from '../../../config/database';

//types 
import { Assets } from '../../../types/types_inventory';

const Handle = async (req:NextApiRequest, res:NextApiResponse)  => {
    const method = req.method;
    const assets:Assets = req.body;

    switch(method){

        case "GET":
            const count = req.method
            if(count == "count"){
                const data = await sql_query<Assets>(
                    'SELECT COUNT(id) FROM property_tbl',
                    []);
                res.status(200).json(data);
            } else {
                const data = await sql_query<Assets>(
                    'SELECT * FROM property_tbl ORDER BY id DESC LIMIT 10',
                    []);
                res.status(200).json(data);
            }
        break;

        case "POST":

        // res.status(200).json(assets);
            const insertData = 
            await sql_query<Assets>(`INSERT INTO property_tbl(property_number, property_serial_number, name, brand, model, lot, nf, complement, value_property) VALUES (?,?,?,?,?,?,?,?,?)`,
            [
                Number(assets.property_number),
                assets.property_serial_number, 
                assets.name, 
                assets.brand,
                assets.model, 
                Number(assets.lot), 
                Number(assets.nf), 
                assets.complement,
                Number(assets.value_property)
            ]);

            res.status(200).json({data:insertData?.id});
        break;

        default:
            res.status(404).json( { message:'Sorry! Bad request error 404' } )
    }
}
export default Handle;