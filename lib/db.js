import mysql from 'serverless-mysql';

export const db = mysql({
  config: {
    host: 'freedb.tech',
    user: 'freedbtech_paikari',
    port: 3306,
    password: 'Admin1',
    database: 'freedbtech_paikari',
  },
});

export async function query(q, values) {
  try {
    const results = await db.query(q, values);
    await db.end();
    return results;
  } catch (e) {
    throw Error(e.message);
  }
}

// async function query(sql, params) {
//   const connection = await mysql.createConnection(dbConfig);
//   const [results] = await connection.execute(sql, params);

//   return results;
// }

// module.exports = {
//   query,
// };
