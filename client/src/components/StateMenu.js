import React, { useState } from 'react'
import { Grid, Menu, Segment, Dropdown } from 'semantic-ui-react'
import StateCases from '../components/StateCases'
import StateResources from '../components/StateResources'
import Headlines from '../components/Headlines'
import Links from '../components/Links'

export default function StateMenu(props) {

    const [active, setActive] = useState("cases")
    const [currentState, setCurrentState] = useState("")

    function handleItemClick(e, { name }) {
        setActive(name)
    };

    let filteredState = props.state.filter(element => element.state.includes(currentState))
    let filteredStateRes = props.res.filter(element => element.state.includes(currentState))
    let news = props.news

    const renderPage = active => {
        switch (active) {
            case "cases": {
                return <StateCases info={filteredState} activeState={currentState} total={props.total}/>
            }
            case "resources": {
                return <StateResources res={filteredStateRes} activeState={currentState}/>
            }
            case "headlines": {
                return <Headlines news={news}/>
            }
            case "links": {
                return <Links/>
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
                        name='headlines'
                        active={active === 'headlines'}
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