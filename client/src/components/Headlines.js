import React from 'react'
import { List } from 'semantic-ui-react'

export default function Headlines(props) {
    console.log('news ', props.news)
    let news = props.news.articles
    return(
        <List>
            {news.map(element => (
                <>
                <List.Item href={element.url}>{element.title}</List.Item>
                </>
            ))}
        </List>
    )
}