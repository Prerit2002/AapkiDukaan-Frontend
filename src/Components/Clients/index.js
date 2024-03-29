import React, { useEffect,useState } from 'react'
import Table,{UnivTable} from '../Table';
import { JsonToTable } from "react-json-to-table";
import axios from 'axios';
import { useSellerData, useSellerId } from '../../Theme1/Contexts/SellerContext';
import { Link } from 'react-router-dom';
import { useToken } from '../../Admin-S/Contexts/token';
function Client() {
    let Sid=useSellerId()
    const [isLoading, setisLoading] = useState(true)
    const [Client, setClient] = useState({
    })
    let headers = useToken()
    useEffect(() => {
       axios.get("/api/showClient/",{headers: headers}).then(data=>{
           console.log(data.data)
           let client = data.data.map((el)=>{
               return (
                   {
                       ...el,
                       PersonalDetails : JSON.stringify(el.PersonalDetails),
                       WebsiteData : JSON.stringify(el.WebsiteData),
                       PromoCode : JSON.stringify(el.PromoCode),
                       Products : JSON.stringify(el.Products),
                       Sales : JSON.stringify(el.Sales)
                   }
               )
           })
           setClient(client)
           setisLoading(false)
       })
    }, [])
    const Delete = (row) =>{
        axios.delete("/api/DeleteSeller/"+row._id,).then(()=>{
            alert('Delete Successly')
            window.location.reload()
        })
     }
    if(isLoading) {
        return (
            <div>Loading</div>
        )
    }
    else {
    return (

        <div className="w-full  m-10">
        <h1 className="text-3xl m-4 text-left">Clients</h1>
            <div className=" overflow-x-scroll max-w-screen-lg">
            <UnivTable Responses={Client} Delete={Delete}/>  
            </div>
        
    </div>
    )
}
}

export default Client
