import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

function ProductCardH(props) {
    const [rating, setRating] = useState(2) // initial rating value
    return (
        <div className="border-2 border-searchBarGrey rounded-lg m-2 p-2">
        <div className="h-50">
        <div key={props.product[0].id} className="grid grid-cols-3 border-searchBarGrey rounded-lg">
        <Link to="#" className="h-56 m-auto">
        <img
            src={props.product[0].imageSrc}
            alt={props.product[0].imageAlt}
            className="w-100 max-h-full object-contain"
          />
          </Link>
        <div className="mt-2 mx-3 text-left justify-between">
          
            <h3 className="text-sm text-gray-700 font-bold">
              <a href={props.product[0].href}>
                <span aria-hidden="true"  />
                {props.product[0].name}
              </a>
            </h3>
            
            <h3 className="text-sm text-gray-700 opacity-30">
              <a href={props.product[0].href}>
                <span aria-hidden="true" />
                {props.product[0].color} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </a>
            </h3>

            <Rating ratingValue={rating} /* Rating Props */ />
            <h3 className="text-sm text-gray-700 opacity-30">
              <a href={props.product[0].href}>
                <span aria-hidden="true"  />
                Free Shipping
              </a>
            </h3>
        </div>
        <div className="">
            <p className=" text-left text-3xl font-bold  text-gray-900 py-2 px-4 ">{props.product[0].price + " ₹"}</p>
            <button
                type="submit"
                className="justify-center bg-theme text-w py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              > Add to Cart
              </button>
            </div>

      </div>
      </div>
      </div>


    
    )
}

export default ProductCardH
