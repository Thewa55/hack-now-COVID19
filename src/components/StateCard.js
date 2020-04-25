import React from 'react';
import StateAbbreviations from '../utils/StateAbbreviations.json'

export default function StateCard(props) {
    // console.log('props is: ' + props)

    let spelledState = StateAbbreviations.find(element => element.abbreviation === props.state.state)
    // console.log('spelledState: ' + spelledState.name)
    return (
        <>
            <div class="ui relaxed list">
                <div class="item">
                    <div class="content">
                        <a class="header">{spelledState.name} ({props.state.state})</a>
                        <div class="description">Positive Tests: {props.state.positive} Total Tests: {props.state.totalTestResults}</div>
                    </div>
                </div>
            </div>
            {/* <div class="ui cards">
                <div class="card">
                    <div class="content">
                        <div class="header">State spelled out</div>
                        <div class="meta">{props.state.state}</div>
                        <div class="description">
                            Elliot Fu is a film-maker from New York.
                    </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}




