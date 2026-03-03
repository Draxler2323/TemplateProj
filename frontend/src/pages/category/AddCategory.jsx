import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios' 
import { toast } from 'react-toastify';
const AddCategory = () => {

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
    try {
      
    axios.post("http://localhost:8080/categorie/add",formData)
      .then(response=>{
        //  alert(response.data)
        toast.success("success! "+response.data.message)
        navigate('/list-cat')
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
          <form>
            <div className="form-group">
              <label htmlFor="catnom">Categorie </label>
              <input type="text" className="form-control"
              name="catnom"
              value={formData.catnom}
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

export default AddCategory
