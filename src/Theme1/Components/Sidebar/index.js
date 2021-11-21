import {React, useState} from 'react'
import CatMenuV from '../CategoryMenu/vertical'
import { Rating } from 'react-simple-star-rating'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Textfield from '../FormComponents/textfield';

function SideElements(props) {
    const [rating, setRating] = useState(2) // initial rating value
    const [StartV, setStartV] = useState(0)
    const [EndV, setEndV] = useState(20000)
    let value = [StartV,EndV]
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
        <div>
        <CatMenuV Arr={Categories} title="Categories" />
        <div className="mt-10">
        <h1 className="text-xl mb-5 text-left">Filter by Rating</h1>
        <Rating ratingValue={rating} /* Rating Props */ />
        </div>
        <div className="mt-10">
        <h1 className="text-xl mb-5 text-left">Filter by Price Range</h1>
        <Range min={0} max={100000}  tipFormatter={value => `${value}%`} value={value} onChange={(value)=>{
            if(value[0] < value[1])
            setStartV(value[0])
            setEndV(value[1])
        }} />      
        <div className="flex flex-row text-left mt-5">
        <Textfield label="Start" value={StartV} setValue={setStartV} />
        <Textfield label="End" value={EndV} setValue={setEndV}/>
        </div>
        <button
                type="submit"
                className="bg-theme text-w  mt-5 float-right py-2 px-4 border border-transparent text-sm font-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              > Apply
              </button>
        </div>
        </div>
    )
}

export default SideElements
