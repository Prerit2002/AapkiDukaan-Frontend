import React, { useEffect, useState } from 'react'
import Table, { UnivTable } from '../Table'
import { Link } from 'react-router-dom'
import { useSellerId } from '../../Theme1/Contexts/SellerContext'
import axios from 'axios'
function Inventory() {
    let Sid=useSellerId()
    const [isLoading, setisLoading] = useState(true)
    const [Products, setProducts] = useState({
    })
    useEffect(() => {
       axios.get("/api/findSellerProducts/"+Sid).then(data=>{
           console.log(data.data)
        //    let Productss = data.data.map((el)=>{
        //        return (
        //            {
        //                ...el,
        //                Address : JSON.stringify(el.Address)
        //            }
        //        )
        //    })
           setProducts(data.data)
           setisLoading(false)
       })
    }, [])
    const Delete = (row) =>{
        console.log(row)
    }
    if(isLoading) {
        return (
            <div>Loading</div>
        )
    }
    else {
    return (

        <div className="w-full  m-10">
        <h1 className="text-3xl m-4 text-left">Productss</h1>
        <Link to="add" className=" max-h-10 p-2 rounded-lg bg-lightgreen" >Add +</Link> 
            <div className=" overflow-x-scroll max-w-screen-lg">
            <UnivTable Responses={Products} Delete={Delete}/>  
            </div>
        
    </div>
    )
}
}

export default Inventory
