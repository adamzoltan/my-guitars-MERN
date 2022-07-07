import React from 'react'
import classes from './GuitarDetails.module.css'

const GuitarDetails = ({guitar}) => {
  return (
    <div key={guitar.id} className={classes['guitar-details']}>
            <div className={classes['img-container']}><img src={guitar.image} alt=""/></div>
            <div>
            <div className={classes['flex']}>
                <p className={classes['brand']}>{guitar.brand}</p>
                <p className={classes['type']}>{guitar.type}</p>
            </div>
            <div className={classes['details']}>
                <p>Pickups: {guitar.pickups}</p>
                <p>Body material: {guitar.material}</p>
                <p>Neck finish: {guitar.neck}</p>
            </div>
            </div>
    </div>
  )
}

export default GuitarDetails