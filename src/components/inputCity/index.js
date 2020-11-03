import React, { useState } from 'react'
import SelectCity from '../selectCityButton'
import PropTypes from 'prop-types'

function Input({ setLocation }) {
    const [inputValue, setInputValue] = useState(null)
    
    return (
        <div>
            <input onKeyUp={(e) => {
                setInputValue(e.target.value)
            }}/>
            <SelectCity cityValue={inputValue} setLocation={setLocation}/>
        </div>
    )
}

Input.propTypes = {
    setLocation:PropTypes.func,
}

export default Input