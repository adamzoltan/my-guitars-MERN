import React, {useState,} from 'react'
// import {  useHistory } from 'react-router-dom'
import classes from './AddGuitar.module.css'

const AddGuitar = () => {
  const [brand, setBrand]  = useState('');
  const [type, setType]  = useState('');
  const [body, setBody]  = useState('');
  const [pickups, setPickups]  = useState('');
  const [material, setMaterial]  = useState('');
  const [neck, setNeck]  = useState('');
  const [owned, setOwned] = useState('')
  const [image, setImage] = useState('')
//   const history = useHistory()

  const postGuitar = async (newGuitar) => {
    try {
        const response = await fetch(`/api/guitars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(newGuitar)
        })
        console.log(response);
        if (!response.ok) {
            throw new Error('Something went wrong while adding a new guitar')
          }
    } catch (error) {
        console.log(error.message);
    }
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let newGuitar = {
      'brand': brand,
      'type': type,
      'body': body,
      'pickups': pickups,
      'material': material,
      'neck': neck,
      'owned': owned,
      'image': image
    }
    console.log(newGuitar);
    postGuitar(newGuitar)
  }
  return (
    <div className={classes['wrapper']} onSubmit={onSubmitHandler}>
      <form>
        <label>
          <span>Brand:</span>
          <input 
            type='text' 
            onChange={(e) => setBrand(e.target.value)}
            value={brand}
            required/>
        </label>

        <label>
          <span>Type:</span>
          <input 
            type='text' 
            onChange={(e) => setType(e.target.value)}
            value={type}
            required/>
        </label>

        <label>
          <span>Body:</span>
          <input 
            type='text' 
            onChange={(e) => setBody(e.target.value)}
            value={body}
            required/>
        </label>

        <label>
          <span>Pickups :</span>
          <select onChange={(e) => setPickups(e.target.value)}>
            <option value="">--Choose an option--</option>
            <option value="HH">HH</option>
            <option value="HSS">HSS</option>
            <option value="SSS">SSS</option>
          </select>
        </label>

        <label>
          <span>Body material:</span>
          <input 
            type='text' 
            onChange={(e) => setMaterial(e.target.value)}
            value={material}
            required/>
        </label>

        <label>
          <span>Neck:</span>
          <input 
            type='text' 
            onChange={(e) => setNeck(e.target.value)}
            value={neck}
            required/>
        </label>

        <label>
          <span>Owned:</span>
          <select  onChange={(e) => setOwned(e.target.value)}>
            <option value="">--Choose an option--</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>
          <span>Image:</span>
          <input 
            type='text' 
            onChange={(e) => setImage(e.target.value)}
            value={image}
            required/>
        </label>

        <input type='submit' value='Add'/>
      </form>
    </div>
  )
}

export default AddGuitar