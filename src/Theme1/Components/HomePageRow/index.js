import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard'
import CatMenuV from '../CategoryMenu/vertical'
import axios from 'axios'
import { useSellerId } from '../../Contexts/SellerContext'
function Row(props) {
    const [Products, setProducts] = useState([])
    let id  = useSellerId()
    useEffect(() => {
        axios.put('/api/findProductsbyCategory/'+id,{"Category":props.Category}).then((data)=>{
            setProducts(data.data)
        })
    }, [])
    console.log(Products)
    return (
        <div className="grid grid-cols-4  max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
        <CatMenuV Arr={props.Arr} title="Categories" />
        <Link to="#"><p className="text-left m-3 mx-9 font-bold">More Products {'>'} </p> </Link>
        </div>
        {Products.map(el=>{
            return <ProductCard pid={el._id}/>  
        })
        
        }
    
         
        </div>
    )
}

export default Row
