import React from 'react'
import PropTypes from 'prop-types'


function SelectCity({ cityValue, setLocation }) {

    function submit() {
        setLocation(cityValue)
        document.querySelector('input').value = ''
    }

    return <button onClick={() => { submit() }}>Select City</button>
}

SelectCity.propTypes = {
    cityValue:PropTypes.string,
    setLocation:PropTypes.func,
}

export default SelectCity