import React from 'react'
import { List } from 'semantic-ui-react'

export default function Links() {

    return (
        <>
            <h2>Quick Links</h2>
            <List>
                <List.Item>
                    <List.Header as='a' href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank">World Health Organization</List.Header>
                    <List.Description>
                        WHO COVID-19 page.
                    </List.Description>
                </List.Item>
                <List.Item>
                    <List.Header as='a' href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" target="_blank">Center for Disease Control and Prevention </List.Header>
                    <List.Description>
                        CDC coronavirus information page. The latest numbers from the CDC can be found <a href="https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cases-in-us.html" target="_blank">here.</a>
                    </List.Description>
                </List.Item>
                <List.Item>
                    <List.Header as='a' href="https://www.nytimes.com/interactive/2020/us/coronavirus-stay-at-home-order.html" target="_blank">New York Times </List.Header>
                    <List.Description>
                        A New York Times article in regards to stay at home orders in place for each state.
                    </List.Description>
                </List.Item>
            </List>
        </>
    )
}

