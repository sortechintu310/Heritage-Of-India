import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST, 
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect().then(() => console.log('Connected to the PostgreSQL database successfully!')).catch((err) => console.error('Database connection error:', err.stack));

export default db;
