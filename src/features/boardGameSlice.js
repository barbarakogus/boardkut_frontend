import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    loadingPost: false,
    data: [],
    error: null,
    errorPost: null
};

const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

export const fetchBoardgames = createAsyncThunk('boardgames/fetchBoardgames', async () => {
    const res = await fetch(`${baseUrl}/api/boardgames`);
    return await res.json();
});

export const addBoardgame = createAsyncThunk('boardgames/addBoardgame', async (boardgame) => {
    const res = await fetch(`${baseUrl}/api/boardgames`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(boardgame)
    });
    const location = res.headers.get('Location');
    const id = location.substring(location.lastIndexOf('/') + 1);
    return { ...boardgame, id };
})

export const deleteBoardgame = createAsyncThunk('boardgames/deleteBoardgame', async (id) => {
    await fetch(`${baseUrl}/api/boardgames/${id}`, { method: 'DELETE' });
    return id;
});

const boardGameSlice = createSlice({
    name: 'boardgames',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchBoardgames.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchBoardgames.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        })
        builder.addCase(fetchBoardgames.rejected, (state, action) => {
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
        builder.addCase(addBoardgame.pending, state => {
            state.loadingPost = true
        })
        builder.addCase(addBoardgame.fulfilled, (state, action) => {
            state.loadingPost = false
            state.data.push(action.payload)
            state.errorPost = null
        })
        builder.addCase(addBoardgame.rejected, (state, action) => {
            state.loadingPost = false
            state.errorPost = action.error.message
        })
        builder.addCase(deleteBoardgame.pending, state => {
            state.loading = true
        })
        builder.addCase(deleteBoardgame.fulfilled, (state, action) => {
            const index = state.data.findIndex((bg) => bg.id === action.payload)
            state.loading = false
            state.data.splice(index, 1)
            state.error = null
        })
        builder.addCase(deleteBoardgame.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
});

export const { getBoardgames, updateBoardgame } = boardGameSlice.actions;
export default boardGameSlice.reducer;

