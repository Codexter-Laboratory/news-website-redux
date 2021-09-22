import {createSlice} from "@reduxjs/toolkit";

const article = {
    data: [],
    history: [],
    loading: false
}


export const newsSlice = createSlice({
    name: 'news',
    initialState: article,
    reducers: {
        FETCH_ARTICLES_STARTED: (state) => {
            state.loading = false
        },
        FETCH_ARTICLES_SUCCESS: (state, action) => {
            state.data = action.payload.data
            state.history = action.payload.history
            state.loading = false
        },
        FETCH_ARTICLES_FAILED: (state) => {
            state.data = []
            state.history = []
            state.loading = false
        }
    },

})

export const newsAction = newsSlice.actions;


