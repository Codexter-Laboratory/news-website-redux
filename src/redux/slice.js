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
        UPDATE_HISTORY: (state, action) => {
            // const newArticle = action.payload.item;
            // console.log('new article', newArticle);
            state.history.push(action.payload.item);
        },
        FETCH_ARTICLES_STARTED: (state) => {
            state.loading = false
        },
        FETCH_ARTICLES_SUCCESS: (state, action) => {
            state.data = action.payload.data
            state.loading = false
        },
        FETCH_ARTICLES_FAILED: (state) => {
            state.data = []
            state.loading = false
        }
    },
})

export const newsAction = newsSlice.actions;


