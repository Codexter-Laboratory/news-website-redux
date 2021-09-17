import React, {useEffect} from 'react'
import {Header} from '../../components/Header/Header'
import './index.scss'
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../redux/actions";
import moment from "moment";
import {Article} from "../../components/Article/Article";

const Home = (props) => {
    // const [articles, setArticles] = useState([])
    // const getNews = async () => {
    //     const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=257f1c291e85414ba2e7deb64b72d8a7'
    //     let response = await fetch(url);
    //     let result = await response.json();
    //     setArticles(result.articles)
    //     // console.log("articles: ", articles)
    // }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews)
    }, [])

    const storeData = useSelector((state) => state.reducer.data)

    let data = storeData.data.articles

    const listItems = data.map((article, index) => {
        let dateTime = moment(article.publishedAt).format('MMMM Do YYYY , h:mm a');
        const onArticlePress = () => {
        }
        return (
            <div className='main' style={{paddingLeft: 20}}>
                <a key={index} href={article.url} target="_blank" onClick={() => onArticlePress()}>
                    <Article
                        icon={article.urlToImage}
                        title={article.title}
                        author={article.author}
                        description={article.description}
                        source={article.source.name}
                        onPress={onArticlePress}
                        dateTime={dateTime}
                    />
                </a>
            </div>
        )
    })

    return (
        <div>
            <Header title={'Home'}/>
            <div className='content'>
                {listItems}
            </div>
        </div>

    )
}
export default Home
