export const FETCH_ARTICLES_STARTED   = 'FETCH_ARTICLES_STARTED';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILED = 'FETCH_ARTICLES_FAILED';

const fetchNews = async() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=257f1c291e85414ba2e7deb64b72d8a7'
    let response = await fetch(url);
    return response.json()
}
export const getNews = async (dispatch) => {
    try {
        dispatch({
            type: FETCH_ARTICLES_STARTED,
        });
        let data = await fetchNews()
        dispatch({
            type: FETCH_ARTICLES_SUCCESS,
            payload: {
                data,
            },
        });
    } catch (error) {

        dispatch({
            type: FETCH_ARTICLES_FAILED,
        });
    }
}
