import React, { useState } from 'react'
import { Grid, Menu, Segment, Dropdown } from 'semantic-ui-react'

export default function StateMenu(props) {

    const [active, setActive] = useState("cases")
    const [currentState, setCurrentState] = useState("")

    function handleItemClick(e, { name }) {
        setActive(name)
    };

    const allStates = props.state
    const stateOptions = allStates.map(element => (
        {
            key: element.state,
            text: element.state,
            value: element.state,
            name: element.state,
            onClick: function handleStateClick(e, {value}) {
                setCurrentState(value)
            }
        }
    ))

    console.log('currentState: ',currentState)
    console.log('active: ', active)

    return (

        <Grid>
            <Grid.Column width={4}>
                <Menu fluid vertical tabular>
                <Dropdown pointing='left' className='link item' placeholder='State' text={currentState} search selection options={stateOptions}/>
                    {/* <Dropdown placeholder='States' pointing='left' className='link item' text={currentState}>
                        <Dropdown.Menu>
                            {allStates.map(element => (
                                <Dropdown.Item key={element.state} name={element.state} onClick={handleStateClick}>{element.state} </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown> */}
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
                </Menu>
            </Grid.Column>

            <Grid.Column stretched width={12}>
                <Segment>
                    This is an stretched grid column. This segment will always match the
                    tab height
          </Segment>
            </Grid.Column>
        </Grid>

    )
}