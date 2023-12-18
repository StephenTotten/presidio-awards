import mysql from 'mysql';

const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DATABASE,
})

export const handler = async (event, context, callback) => {
    const sql = "SELECT * FROM `Presidio-Awards`.Employee;"
    connection.query(sql, function (err, result) {
        if (err) throw err;
        callback(null, result);
    })
    connection.end();
};