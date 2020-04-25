import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default function StateDropdown(props) {

    const allStates = props.state
    const stateOptions = allStates.map(element => (
        {
            key: element.state,
            text: element.state,
            value: element.state
        }
    ))

    return (
        <Dropdown placeholder='State' search selection options={stateOptions} />
    )
}