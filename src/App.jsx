import './App.css'
import CarsInfo from './components/CarsInfo';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [cars, setCars] = useState([]);

  const carsAxios = async () => {
    await axios.get('http://localhost:3000/CarsName')
      .then((res) => setCars(res.data))
  }

  useEffect(() => {
    carsAxios();
  }, [])

  return (
    <div className='App'>
      <CarsInfo cars={cars} />
    </div>
  )
}

export default App;