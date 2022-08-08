import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';

//pages & components
import MyGuitars from './pages/MyGuitars';
import WishList from './pages/WishList';
import AddGuitar from './pages/AddGuitar'
import NavBar from './components/NavBar'


function App() {
  const [guitars,setGuitars]=useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchGuitar = async () =>  {
    try{
      const response = await fetch(`/api/guitars`)
    if (!response.ok) {
      throw new Error('Something went wrong')
    }
    const data = await response.json();
    setGuitars(data)
    setIsLoaded(true)
    console.log(data);
    
    } catch(error) {
      setError(error.message)
    }
  }

  useEffect(() => {fetchGuitar()}, [])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <div className='pages'>
          {isLoaded && <Routes>
            <Route path='/' element={<MyGuitars guitars={guitars}/>}/>
            <Route path='/my-guitars' element={<MyGuitars guitars={guitars}/>}/>
            <Route path='/wishlist' element={<WishList guitars={guitars}/>}/>
            <Route path='/addguitar' element={<AddGuitar/>}/>
          </Routes>}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
