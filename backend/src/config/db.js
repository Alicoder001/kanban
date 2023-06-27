/** @format */

import pkg from 'pg';
const { Client } = pkg;

const db = new Client({
  port: 5432,
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  database: 'kanban',
});
await db.connect();
console.log('db connected!... ');
export default db;
