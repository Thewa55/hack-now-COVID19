import React from 'react'
import StateAbbreviations from '../utils/StateAbbreviations.json'
import { List } from 'semantic-ui-react'

export default function StateResources(props) {

    let stateObj = props.res;
    console.log(stateObj);
    let activeState = props.activeState;
    // console.log(activeState)
    let spelledState = StateAbbreviations.find(element => element.abbreviation === activeState);
    return (

        <List link>
            {spelledState ?
                <>
                    <h2>{spelledState.name} State Resources</h2>
                    {stateObj.map(element => (
                        <>
                            <List.Item as='a' href={element.covid19Site} active>COVID-19 Site </List.Item>
                            <List.Item as='a' href={element.twitter.slice(1)}>Twitter Handle: {element.twitter}</List.Item>
                            {/* <List.Item as='a'>Jobs</List.Item>
                            <List.Item as='a'>Team</List.Item> */}
                        </>
                    ))}
                </>
                :
                <h2>No current state provided</h2>
            }



        </List>
    )
}