import axios from "axios";
import React, { useState, useEffect } from "react";
import FormData from "form-data";
import { useSellerId } from "../../../Theme1/Contexts/SellerContext";

function Textfield(props) {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor="Code"
        className="block text-sm font-medium text-gray-700"
      >
        {props.Label}
      </label>
      <input
        type={props.Type}
        name={props.Name}
        id={props.id}
        className="mt-1 p-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}
  
function AddPromoCode(){ 
    let Sid=useSellerId()
const submit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    let data = {
      Code: e.target[0].value,
      Discount: e.target[1].value,
  
      MaxDiscount: e.target[2].value,
   
    };
    console.log(data)
    axios.put("/api/CreatePromoCode/"+Sid, data).then((data) => {
      console.log(data);
      alert("Success");
    });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="shadow overflow-hidden ">
          <h1 className=" text-2xl">Add Promo Codes</h1>

          <div className=" bg-white ">
            <div className="flex flex-row ">
              <div className="flex flex-col m-20">
                <Textfield
                
                  Label="Code Name"
                  Type="text"
                  Name="Code"
                  id="Code"
                />
                <Textfield
                  Label="Discount"
                  Type="Number"
                  Name="Discount"
                  id="Discount"
                />
               <Textfield
                  Label="Maximum Discount"
                  Type="Number"
                  Name="MaxDiscount"
                  id="MaxDiscount"
                />
              </div>

            
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-lightgreen hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )

  }
export default AddPromoCode;
