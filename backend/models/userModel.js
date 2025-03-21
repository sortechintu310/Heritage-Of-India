import db from '../config/db.js';

export default {
    createUser: async (name, email, password) => {
      const query = `
        INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3) RETURNING *;
      `;
      const values = [name, email, password];
      const result = await db.query(query, values);
      return result.rows[0];
    },
  
    getUserByEmail: async (email) => {
      const query = "SELECT * FROM users WHERE email = $1;";
      const result = await db.query(query, [email]);
      return result.rows[0];
    },
}