import React, { useState } from 'react'
import { Grid, Menu, Segment, Dropdown } from 'semantic-ui-react'
import StateAbbreviations from '../utils/StateAbbreviations.json'
import { PromiseProvider } from 'mongoose'
import StateCases from '../components/StateCases'
import StateResources from '../components/StateResources'

export default function StateMenu(props) {

    const [active, setActive] = useState("cases")
    const [currentState, setCurrentState] = useState("")

    function handleItemClick(e, { name }) {
        setActive(name)
    };

    let filteredState = props.state.filter(element => element.state.includes(currentState))

    const renderPage = active => {
        switch (active) {
            case "cases": {
                return <StateCases info={filteredState} activeState={currentState} />
            }
            case "resources": {
                return <StateResources info={props.state}/>
            }
        }
    }

    const allStates = props.state
    const stateOptions = allStates.map(element => (
        {
            key: element.state,
            text: element.state,
            value: element.state,
            name: element.state,
            onClick: function handleStateClick(e, { value }) {
                setCurrentState(value)
            }
        }
    ))

    console.log('currentState: ', currentState)
    console.log('active: ', active)

    return (

        <Grid>
            <Grid.Column width={4}>
                <Menu fluid vertical tabular>
                    <Dropdown pointing='left' className='link item' placeholder='State' text={currentState} search selection options={stateOptions} />
                    <Menu.Item
                        name='cases'
                        active={active === 'cases'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='resources'
                        active={active === 'resources'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='empty'
                        active={active === 'empty'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='links'
                        active={active === 'links'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item/>
                </Menu>
            </Grid.Column>

            <Grid.Column stretched width={12}>
                <Segment>
                    {renderPage(active)}
                </Segment>  
            </Grid.Column>
        </Grid>

    )
}