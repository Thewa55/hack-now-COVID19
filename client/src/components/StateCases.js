import React, { useEffect, useState } from 'react'
import { List } from 'semantic-ui-react'
import StateAbbreviations from '../utils/StateAbbreviations.json'

export default function StateCases(props) {

    let stateObj = props.info;
    console.log(stateObj)
    let activeState = props.activeState;
    let spelledState = StateAbbreviations.find(element => element.abbreviation === activeState);
    let totalData = props.total

    return (

        <List>
            {spelledState ?
                <>
                    <h2>{spelledState.name} ({activeState})</h2>
                    <List.Item>
                        {stateObj.map(element => (
                            <>
                                <List.Header>Positive Cases: {element.positive}</List.Header>
                                <p>These are the number of tests that came back positive.</p>
                                <List.Header>Total Tests: {element.death}</List.Header>
                                <p>Total number of deaths in the state of {spelledState.name}.</p>
                                <List.Header>Total Tests: {element.totalTestResults}</List.Header>
                                <p>This is the total number of tests conducted.</p>
                                <List.Header>Recovered: {element.recovered == null ? "N/A" : element.recovered}</List.Header>
                                <p>These are the total number of people that have recovered from COVID-19.</p>
                            </>
                        ))}
                    </List.Item>
                </>
                :
                <>
                    <h2>US Totals</h2>
                    <List.Item>
                        {totalData.map(element => (
                            // console.log({element})
                            <>
                                <List.Header>Positive Cases in the US: {element.positive}</List.Header>
                                <p>Total number of positive test results in the US.</p>
                                <List.Header>Total Number of Tests in the US: {element.totalTestResults}</List.Header>
                                <p>Number of tests in the US.</p>
                                <List.Header>Recovered Cases in the US: {element.recovered}</List.Header>
                                <p>Total recovered cases.</p>
                            </>
                        ))}
                    </List.Item>
                </>
            }

        </List>
    )
}