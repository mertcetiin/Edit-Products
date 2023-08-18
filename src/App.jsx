import './App.css';
import CarsInfo from './components/CarsInfo';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Input from './components/Input';

function App() {
  const [cars, setCars] = useState([]);
  const [carsFilter, setCarsFilter] = useState([]);

  const carsAxios = async () => {
    try {
      const res = await axios.get('http://localhost:3000/CarsName');
      setCars(res.data);
      setCarsFilter(res.data);
    } catch (error) {
      console.log('Veriler Gelmedi', error);
    }
  };

  useEffect(() => {
    carsAxios();
  }, []);

  const onFilter = (e) => {
    const filteredItems = cars.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCarsFilter(filteredItems);
  };

  return (
    <div className='App'>
      <Input onFilter={onFilter} />
      <CarsInfo cars={carsFilter} />
    </div>
  );
}

export default App;