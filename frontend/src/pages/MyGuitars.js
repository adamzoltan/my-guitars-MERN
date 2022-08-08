import React from 'react'
import GuitarDetails from '../components/GuitarDetails'

const myGuitars = ({guitars}) => {
  const filter = (guitars) => {
    return guitars.filter(guitar =>  guitar.owned)
  }
  return (
    <div>
        <div>
            {guitars && filter(guitars).map((guitar) => (
                <GuitarDetails key={guitar._id} guitar={guitar}></GuitarDetails>
            ))}
        </div>
    </div>
  )
}

export default myGuitars