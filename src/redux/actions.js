import {newsAction} from "./slice";

export const fetchNewsData = () => {
    return async (dispatch) => {
        const fetchNews = async () => {
            const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=257f1c291e85414ba2e7deb64b72d8a7'
            let response = await fetch(url);
            return response.json()
        }

        try {
            const newsData = await fetchNews()
            dispatch(
                newsAction.FETCH_ARTICLES_SUCCESS({
                    data: newsData.articles
                })
            )
        } catch (e) {
            console.log("error: ", e)
        }

    }
}
// let history = []
//
// export const pushHistory = (article) => {
//     history.push(article)
// }
