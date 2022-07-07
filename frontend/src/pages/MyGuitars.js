import React from 'react'
import GuitarDetails from '../components/GuitarDetails'

const myGuitars = ({guitars}) => {
  return (
    <div>
        <div>
            {guitars && guitars.map((guitar) => (
                <GuitarDetails key={guitar._id} guitar={guitar}></GuitarDetails>
            ))}
        </div>
    </div>
  )
}

export default myGuitars