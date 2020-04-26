import React from 'react'
import { List } from 'semantic-ui-react'

export default function Headlines(props) {
    console.log('news ', props.news)
    let news = props.news.articles
    return(
        <List ordered>
            <h2>COVID-19 News Headlines</h2>
            {news.map(element => (
                <>
                <List.Item as="a" href={element.url} target="_blank">{element.title}</List.Item>
                </>
            ))}
        </List>
    )
}