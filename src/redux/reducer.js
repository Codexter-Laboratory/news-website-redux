import {FETCH_ARTICLES_STARTED, FETCH_ARTICLES_FAILED, FETCH_ARTICLES_SUCCESS} from "./actions";

const article = {
    data: [],
    loading: false
}
const reducer = (state = article, action) => {
    if (action.type === FETCH_ARTICLES_STARTED)
        return {
            ...state,
            loading: true
        }
    else if (action.type === FETCH_ARTICLES_SUCCESS)
    {
        return {
            ...state,
            data: [action.payload],
            loading: false
        }
    }
    else if (action.type === FETCH_ARTICLES_FAILED)
    {
        return {
            ...state,
            data: [],
            loading: false
        }
    }
    else
        return state
};

export default reducer;
