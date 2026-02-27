import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios' 
 
const AddMateriel = () => {

  // const navigate=useNavigate()

  const [formData, setFormData] = useState({
    libelle: '',
    quantite: '' 
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
    axios.post("http://localhost:8080/materiel/add",formData)
    .then(response=>{
       alert(response.data.message)
        console.log(response.data.message)
    })
     
    navigate('/list-mat')
}
  // const submitHandler=(e)=>{
  //   e.preventDefault()
  //     alert("Add Category");
  //     navigate('/list-cat')


  // }
  return (
    <div className="card shadow p-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Add Materiel</h1>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="libelle">Libelle </label>
              <input type="text" className="form-control"
              name="libelle"
              value={formData.libelle}
              onChange={handelChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantite">Quantite </label>
              <input type="text" className="form-control"
              name="quantite"
              value={formData.quantite}
              onChange={handelChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary">save</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default AddMateriel
