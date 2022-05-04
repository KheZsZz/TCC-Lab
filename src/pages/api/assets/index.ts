//import types
import { NextApiRequest, NextApiResponse } from "next";
import { manisfest } from "../../../config/config";

//import sys
import { sql_query } from "../../../config/database";

//types
import { Assents } from "../../../types/types_stock";

const Handle = async (req: NextApiRequest, res: NextApiResponse) => {
    const { labs_user_token } = req.cookies;
    const assets: Assents = req.body;

    if (labs_user_token) {
        switch (req.method) {
            case "GET":
                const data = await sql_query<Assents>(
                    `SELECT * FROM ${manisfest.tablesBD.Institution.assets} WHERE verify = ? ORDER BY id`,
                    [1]
                );
                res.status(200).json(data);
                break;

            case "POST":
                const insertData = await sql_query<Assents | any>(
                    `INSERT INTO ${manisfest.tablesBD.Institution.assets}
                  (
                      assent_number,
                      serial_number,
                      assent_name,
                      brand,
                      model,
                      product_batch,
                      tax_invoice,
                      complement,
                      value_assent,
                      color
                  )
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [
                        Number(assets.assent_number),
                        assets.serial_number,
                        assets.assent_name,
                        assets.brand,
                        assets.model,
                        Number(assets.product_batch),
                        Number(assets.tax_invoice),
                        assets.complement,
                        Number(assets.value_assent),
                        assets.color
                    ]
                );

                res.status(200).json({ insertId: insertData.insertId });
                break;

            default:
                res.status(404).json({
                    message: "Sorry! Bad request error 404"
                });
        }
    } else {
      res.status(401).json({message:`User not atenticated`});
    }
};
export default Handle;
