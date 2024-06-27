import React from 'react'
import PropTypes from 'prop-types'
import './TextInput.css'
import { options } from './constants'

const TextInput = ({
  size,
  value,
  type,
  placeholder,
}) => {
  return (
    <input className={`size-${size}`}
           value={value}
           placeholder={placeholder}
           type={type}/>
  )
}

TextInput.propTypes = {
  size: PropTypes.oneOf(options.sizes),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(options.types),
}

export default TextInput
