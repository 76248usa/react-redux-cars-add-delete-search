/*import {createSlice, nanoid} from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        addCar(state, action){
           state.cars.push({
            name: action.payload.name,
            cost: action.payload.cost,
            id: nanoid()
           })
        },
        removeCar(state, action){
            const updated = state.cars.filter((car) => {
                return action.payload.car.id !== car.id
            })
            state.cars = updated;
        },
        changeSearchTerm(state, action){
            state.searchTerm = action.payload

        }
    }
})

export const {addCar, removeCar, changeSearchTerm} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;*/

import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) { 
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
