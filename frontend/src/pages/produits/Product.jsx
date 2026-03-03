import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';

function Product() {
    const [data, setData] = useState([])
    useEffect(() => {
        // toast.success({msg})
        axios.get("http://localhost:8080/produit")
         .then(response=>{
             setData(response.data)
             console.log(response.data)
         })
    }, [])
  return (
    <div className="card shadow p-4">
      <h2>Liste Produit</h2>
      <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
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
                                data.map((prod,index)=>(
                                    <tr key={index}>
                                    <td>
                                        {prod.id}
                                    </td>
                                    <td>
                                    {prod.libelle}
                                    </td>
                                    <td>
                                    {prod.qte}
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

export default Product
