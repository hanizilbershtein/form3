import React from 'react'

const Print = ({first,last,age}) => {
  return (
    <div><div>Entered information</div>
        <div>your name:{first}</div>
        <div>{last}</div>
        <div>your age:{age}</div>
    </div>
  )
}

export default Print