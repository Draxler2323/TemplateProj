import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios' 
 
const EditCategory = () => {

  // const navigate=useNavigate()

  const [formData, setFormData] = useState({
    catnom: '', 
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
    axios.post("http://localhost:8080/categorie/add",formData)
    .then(response=>{
       alert(response.data.message)
        console.log(response.data.message)
    })
     
    navigate('/list-cat')
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
          <h1>Add Category</h1>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="catnom">Categorie </label>
              <input type="text" className="form-control"
              name="catnom"
              value={formData.catnom}
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

export default EditCategory
