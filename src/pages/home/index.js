import React, {useEffect, useState} from 'react'
import {Header} from '../../components/Header/Header'
import './index.scss'
import {useDispatch, useSelector} from "react-redux";
import {addToHistory, fetchNewsData} from "../../redux/actions";
import moment from "moment";
import {Article} from "../../components/Article/Article";

const Home = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchNewsData())
    }, [dispatch])

    const storeData = useSelector((state) => (
        state.data
    ))
    let historyData = useSelector((state) => (
        state.history
    ))
    const onArticlePress = (item) => {
        dispatch(addToHistory(item))
        console.log("history ", historyData)
    }
    const listItems = storeData.map((article) => {
        let dateTime = moment(article.publishedAt).format('MMMM Do YYYY , h:mm a');
        return (
            <div className='main' style={{paddingLeft: 20}}>
                <a key={article.url} href={article.url} target="_blank" onClick={(e) => onArticlePress(article)}>
                    <Article
                        icon={article.urlToImage}
                        title={article.title}
                        author={article.author}
                        description={article.description}
                        source={article.source.name}
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
