import React from 'react';
import StateAbbreviations from '../utils/StateAbbreviations.json'

export default function StateCard(props) {
    // console.log('props is: ' + props)

    let spelledState = StateAbbreviations.find(element => element.abbreviation === props.state.state);
    let percentPositive = ((props.state.positive / props.state.totalTestResults) * 100).toFixed(0);
    // console.log(percentPositive, spelledState)   
    // console.log('spelledState: ' + spelledState.name)
    return (
        <>
            {/* <div class="ui relaxed list">
                <div class="item">
                    <div class="content">
                        <a class="header">{spelledState.name} ({props.state.state})</a>
                        <div class="description">Positive Tests: {props.state.positive} Total Tests: {props.state.totalTestResults}</div>
                    </div>
                </div>
            </div> */}
            <div class="green card">
                <div class="content">
                    <div class="header">
                        <a>{props.state.state}</a></div>
                    <div class="meta">
                        {spelledState.name}</div>
                    <div class="description">
                        <div class="ui relaxed list">
                            <div class="item">
                                <div class="content">
                                    <div class="description">Positive Tests: {props.state.positive}</div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="content">
                                    <div class="description">Total Tests: {props.state.totalTestResults}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="extra content">
                
                </div>
            </div>
        </>
    )
}




