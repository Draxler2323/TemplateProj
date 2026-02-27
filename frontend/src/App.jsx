import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Category from './pages/category/Category'
import AddCategory from './pages/category/AddCategory'
import AddMateriel from './pages/materiels/AddMateriel'
import Materiel from './pages/materiels/Materiel'

function App() {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/add-cat" element={<AddCategory/>} />
        <Route path="/list-cat" element={<Category/>} />
        <Route path="/add-mat" element={<AddMateriel/>} />
        <Route path="/list-mat" element={<Materiel/>} />
       
      </Routes>
      
    </>
  )
}

export default App
