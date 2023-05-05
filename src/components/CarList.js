/*import React from 'react'
import {carsReducer} from '../store'
import {useSelector} from 'react-redux';

function CarList() {

const cars = useSelector((state) => {
  return state.cars.cars;
})
console.log(cars);
  
  return (
    <div>
     Carlist
    </div>
  )
}

export default CarList*/

import { removeCar } from '../store/slices/carsSlice';
import { useSelector, useDispatch } from 'react-redux';

function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector(({cars: {data, searchTerm}}) => {
   return data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
  });

  const handleCarDelete = (car) => {
   dispatch(removeCar(car.id));
  }

  const renderedCars = cars.map((car) => {
    return <div key={car.id} className='panel'>
      <p>{car.name} - ${car.cost}</p>
      <button className="button is-danger"
      onClick={() => handleCarDelete(car)}>Delete</button>
    </div>
  })

  return <div className="car-list">
    {renderedCars}
    <hr /></div>;
}

export default CarList;