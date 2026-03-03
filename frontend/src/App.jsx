import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Category from './pages/category/Category'
import AddCategory from './pages/category/AddCategory'
import { ToastContainer, toast } from 'react-toastify';
import Product from './pages/produits/Product'
import Addproduct from './pages/produits/Addproduct'
function App() {
  return ( 
    
    <>
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/add-cat" element={<AddCategory/>} />
        <Route path="/list-cat" element={<Category/>} />
        <Route path="/list-prod" element={<Product/>} />
        <Route path="/add-prod" element={<Addproduct/>} />
        
       
      </Routes>
      
    </>
  )
}

export default App
