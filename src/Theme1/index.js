import React from 'react'
import CartProvider from './Contexts/CartContext'
import Main from './main'
import SellerDataProvider from './Contexts/SellerContext'

function Theme1() {
    let Categories = [
        {
            text : "Fashion ",
            link : "#"
        },
        {
            text : "Mobiles and Tablets",
            link : "#"
        },
        {
            text : "Consumer Electronics",
            link : "#"
        },
        {
            text : "Books ",
            link : "#"
        },
        {
            text : "Movie Tickets",
            link : "#"
        },
        {
            text : "Baby Products",
            link : "#"
        },
        {
            text : "Groceries ",
            link : "#"
        },
        {
            text : "Food Takeaway/Delivery",
            link : "#"
        }
    ]
    return (
        <SellerDataProvider>
        <CartProvider>
        <div className="overflow-hidden"> 
         
            <Main Arr={Categories}/>
            
        </div>
        </CartProvider>
        </SellerDataProvider>
    )
}

export default Theme1
