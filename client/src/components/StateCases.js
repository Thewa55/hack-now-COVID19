import React from 'react'
import { List } from 'semantic-ui-react'
import StateAbbreviations from '../utils/StateAbbreviations.json'

export default function StateCases(props) {

    let stateObj = props.info;
    console.log('stateObj ', stateObj)
    let activeState = props.activeState;
    // console.log('activeState, ', activeState)
    let spelledState = StateAbbreviations.find(element => element.abbreviation === activeState);
    // console.log('spelledState: ', spelledState)

    return (


        <List>
            {spelledState ?
                <>
                    <h2>{spelledState.name} ({activeState})</h2>
                    <List.Item>

                        {stateObj.map(element => (
                            // console.log(element.positive)
                            <>
                                <List.Header>Positive Cases: {element.positive}</List.Header>
                                <p>These are the number of tests that came back positive.</p>
                                <List.Header>Total Tests: {element.totalTestResults}</List.Header>
                                <p>These are the total number of tests.</p>
                                <List.Header>Recovered: {element.recovered == null ? "N/A" : element.recovered }</List.Header>
                                <p>These are the total number of people that have recovered from COVID-19.</p>
                            </>
                        ))}

                    </List.Item>
                </>
                : <h2>Here are the US totals</h2>}

        </List>
    )
}