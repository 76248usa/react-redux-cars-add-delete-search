import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {changeSearchTerm} from '../store';

function CarSearch() {
  const dispatch = useDispatch();
  
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm
  })
  const handleSearchTerm = (e) => {
    dispatch(changeSearchTerm(e.target.value))
  }
  console.log(searchTerm)
  
  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label htmlFor="" className="label">Search</label>
        <input type="text" 
        className="input"
        onChange = {handleSearchTerm}
        value={searchTerm} />
      </div>
    </div>
  )
}

export default CarSearch