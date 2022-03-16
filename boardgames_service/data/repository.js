const db = require('./db');

module.exports = {
  getAllProducts: async () => {
    const { rows } = await db.query(db.GET_PRODUCTS);
    return rows; 
  }, 
}