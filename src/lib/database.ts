import mysql from 'serverless-mysql';

const conect = mysql({config:{
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port:3306,
}});

export const sql_query = async (sqlquery:string, values = []) => {
    try {
        await conect.connect();
        try{
            const result = await conect.query(sqlquery, values);
            await conect.end();
            return result;
        }catch(err){
            console.log("Error in query, " + err)
        }
    } catch (error) {
        console.error(error + "Error in connection");
    }
}