import React from 'react'
import PropTypes from 'prop-types'
import { options } from './constants'
import './Card.css'
import ClassNames from 'ClassNames'

const Card = ({
  children,
  color = 'primary',
  size = 'sm',
  isClickable,
  isDragable,
}) => {
  return (
    <div className={ ClassNames('card', {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        'is-clickable': isClickable,
        'is-dragable': isDragable,
    })}>{ children }</div>
  )
}

Card.propTypes = {
  Children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  isClickable: PropTypes.bool,
  isDragable: PropTypes.bool,
}

export default Card
