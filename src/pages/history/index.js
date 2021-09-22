import React, {useEffect, useState} from "react";
import {Header} from "../../components/Header/Header";
import moment from "moment";
import {getNews} from "../../redux/actions";
import {Article} from "../../components/Article/Article";
import {useDispatch, useSelector} from "react-redux";

const History = () => {
    const [historyData, setHistory] = useState([])
    const dispatch = useDispatch()
    const history = useSelector((state) => state.history)

    console.log("data: ", history)
    // useEffect(()=>{setHistory(history.history.articles)},[history])

    const listItems = historyData.map((article, index) => {
        let dateTime = moment(article.publishedAt).format('MMMM Do YYYY , h:mm a');
        return (
            <div className='main' style={{paddingLeft: 20}}>
                <a key={index} href={article.url} target="_blank">
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
            <Header title={'History'}/>
            <div className='content'>
                {listItems}
            </div>
        </div>
    )
}
export default History
