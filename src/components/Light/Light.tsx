import React from 'react'

type Props = {
  /** some description */
  variant: 'green' | 'yellow' | 'red'
};

/** some comment about light component */
const Light = ({variant = 'green'}: Props) => {
  return (
    <div 
      className='w-20 h-20 rounded-full m-2'
      style={{ background: variant }}
    ></div>
  )
}

export default Light;