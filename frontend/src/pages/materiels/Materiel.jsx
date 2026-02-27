import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
 
const Materiel = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/materiel")
         .then(response=>{
             setData(response.data)
             console.log(response.data)
         })
    }, [])
  return (
    <div className="card shadow p-4">
      <h2>Liste Materiel</h2>
      <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                            <tr>
                                <th>ID</th>
                                <th>Libelle</th>
                                <th>Quantite</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((mat,index)=>(
                                    <tr key={index}>
                                    <td>
                                        {mat.id}
                                    </td>
                                    <td>
                                    {mat.libelle}
                                    </td>
                                    <td>
                                    {mat.quantite}
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

export default Materiel
