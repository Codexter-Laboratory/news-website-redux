import React, {useEffect, useState} from 'react'
import {Header} from '../../components/Header/Header'
import './index.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchNewsData} from "../../redux/actions";
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
    const historyData = useSelector((state) => (
        state.history
    ))
    const listItems = storeData.map((article, index) => {
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
