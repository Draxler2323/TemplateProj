import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
// import { ToastContainer, toast } from 'react-toastify';
const Category = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        
        axios.get("http://localhost:8080/categorie")
         .then(response=>{
             setData(response.data)
             console.log(response.data)
         })
    }, [])
  return (
    <div className="card shadow p-4">
      <h2>Liste Category</h2>
      <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                            <tr>
                                <th>ID</th>
                                <th>Categorie</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((cat,index)=>(
                                    <tr key={index}>
                                    <td>
                                        {cat.id}
                                    </td>
                                    <td>
                                    {cat.cat_nom}
                                    </td>
                                    <td>
                                        <Link className="btn btn-success">Edit</Link>
                                    </td>
                                </tr>
                                ))
                            }
                           
                        </tbody>

                                </table>
                            </div>
                        </div>
    </div>
  )
}

export default Category
