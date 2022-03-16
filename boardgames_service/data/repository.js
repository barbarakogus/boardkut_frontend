const db = require('./db');

module.exports = {
  getAllBoardgames: async () => {
    const { rows } = await db.query(db.GET_BOARDGAMES);
    return rows;
  },
  getBoardgameById: async (id) => {
    const { rows } = await db.query(db.GET_BOARDGAME_BY_ID, [id]);
    return rows;
  },
  addBoardgame: async (data) => {
    const { rows } = await db.query(db.POST_BOARDGAME, [data.title, data.type, data.players, data.play_time, data.language, data.age, data.purchase_date]);
    return rows;
  },
  updateBoardgame: async (data, id) => {
    console.log(data);
    console.log(id);
    const { rows } = await db.query(db.UPDATE_BOARDGAME, [data.title, data.type, data.players, data.play_time, data.language, data.age, data.purchase_date, id]);
    return rows; 
  },
  deleteBoardgame:async (id) => {
    const { rows } = await db.query(db.DELETE_BOARDGAME, [id]);
    return rows; 
  },
}
