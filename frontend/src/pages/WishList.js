import React from 'react'
import GuitarDetails from '../components/GuitarDetails'

const wishList = ({guitars}) => {
  const filter = (guitars) => {
    return guitars.filter(guitar =>  !guitar.owned)
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

export default wishList