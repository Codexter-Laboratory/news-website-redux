import React from 'react';
import './article.scss'

export const Article = props => {
    return (
            <div className='container'>
                <img className='image' src={props.icon} alt={''}/>
                <p className='title'>{props.title}</p>
                <p className='description'>
                    {props.description}
                </p>
                <p className='source'>{props.source}</p>
                <p className='dateTime'>{props.dateTime}</p>
            </div>
    );
};
