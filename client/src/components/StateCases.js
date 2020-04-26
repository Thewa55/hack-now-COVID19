import React from 'react'
import { List } from 'semantic-ui-react'
import StateAbbreviations from '../utils/StateAbbreviations.json'

export default function StateCases(props) {

    // console.log('statecases: ', props.info[0])
    let stateObj = props.info;
    console.log('stateObj ', stateObj)
    let activeStates = props.activeState;
    console.log('activeState, ', activeStates)
    let spelledState = StateAbbreviations.find(element => element.abbreviation === activeStates);
    console.log('spelledState: ', spelledState)

    return (


        <List>
            {spelledState ? 
            <>
            <h2>{spelledState.name} ({activeStates})</h2>
            <List.Item>
                <List.Header>Positive Cases: {props.info.positive}</List.Header>
                These are the number of tests that came back positive
            </List.Item>
            </>
            : <h2>Here are the US totals</h2> }
            
        </List>
    )
}