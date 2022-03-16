const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'postgres',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  user: 'postgres',
  password: 'postgres',
});

module.exports = { 
  query: async (text, params) => await pool.query(text, params), 
  GET_PRODUCTS : 'SELECT * FROM "boardgames"'
};
