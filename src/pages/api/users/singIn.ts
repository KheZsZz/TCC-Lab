import { NextApiRequest, NextApiResponse } from 'next';
import { manisfest } from '../../../config/config';
import { sql_query } from '../../../config/database';
import { Users } from '../../../types/type_users';
import { sign } from 'jsonwebtoken';

const HandleSingIn = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      try {
        const { email, password } = req.body;

        const data = await sql_query<Users[]>(
          `select * from ${manisfest.tablesBD.Users.users} where email = ? and verify = ?`,
          [email, 1],
        );

        data?.length === 0
          ? res.status(404).json({ message: `Email or password invalided` })
          : data?.map((item) =>
              item.email == email && item.password == password
                ? res.status(200).json({
                    isAutenticated: true,
                    token: sign(
                      String(item.id),
                      String(process.env.SECRET_TOKEN),
                    ),
                  })
                : res.status(401).json({ isAutenticated: false }),
            );
      } catch (error) {
        res.status(406).json({
          message: `Error in request, error: ${error}`,
        });
      }
      break;

    default:
      res.status(404).json({
        message: `Sorry! Bad request error ${res.statusCode}`,
      });
  }
};
export default HandleSingIn;
