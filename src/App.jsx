import './App.css'
import CarsInfo from './components/CarsInfo';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Input from './components/Input';

function App() {

  const [cars, setCars] = useState([]);
  const [filter, setFilter] = useState('');

  const carsAxios = async () => {
    await axios.get('http://localhost:3000/CarsName')
      .then((res) => setCars(res.data))
  }

  useEffect(() => {
    carsAxios();
  }, [])

  const onFilter = (e) => {
    const filteredItems = cars.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilter(filteredItems);
  };

  const filteredCarList = filter.length > 0 ? filter : cars;
  return (
    <div className='App'>
      <Input onFilter={onFilter} />
      <CarsInfo cars={filteredCarList} />
    </div>
  )
}

export default App;