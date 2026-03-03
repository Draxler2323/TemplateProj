import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios' 
import { toast } from 'react-toastify';

function Addproduct() {
    const [formData, setFormData] = useState({
        libelle_prod: '', 
        qte_prod: '' 
    })
    const handelChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    
    }
    const navigate=useNavigate()
    const submitHandler=(e)=>{
        e.preventDefault()
        try {
          
        axios.post("http://localhost:8080/produit/addprod",formData)
          .then(response=>{
            //  alert(response.data)
            toast.success("success! "+response.data.message)
            navigate('/list-prod')
              console.log(response.data.message)
          }).catch(err=>{
            toast.info("erreur! "+err)
            console.log(err)
          })
        } catch (error) {
          toast.warning("erreur! "+error)
          console.log(error)
        }
        // toast.success("success! "+response.data.message)
        // navigate('/list-cat')
    }
  return (
    <div className="card shadow p-4">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h1>Add Product</h1>
        <form>
          <div className="form-group">
            <label htmlFor="libelle_prod">Produit </label>
            <input type="text" className="form-control"
            name="libelle_prod"
            value={formData.libelle_prod}
            onChange={handelChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="qte_prod">Quantite </label>
            <input type="text" className="form-control"
            name="qte_prod"
            value={formData.qte_prod}
            onChange={handelChange}
            />
          </div>
          <div className="form-group">
            <button  onClick={submitHandler} className="btn btn-primary">save</button>
          </div>
        </form>

      </div>
    </div>
  </div>
  )
}

export default Addproduct
