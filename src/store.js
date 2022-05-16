import { configureStore } from "@reduxjs/toolkit";
import boardGameReducer from "./features/boardGameSlice";

const store = configureStore({
    reducer: {
        boardgames: boardGameReducer,
    }
});

export default store;