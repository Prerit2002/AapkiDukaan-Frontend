import React from "react";
import OrderHistory from "../OrderHistory";
function TextFieldForm(props) {
  return (
    <div className="col-span-6 sm:col-span-1">
      <label
        htmlFor="email-address"
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        autoComplete={props.oc}
        className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}
export function AccountBox (props) {
  return (
    <form action="#" method="POST">
    <div className="shadow overflow-hidden sm:rounded-md">
      <div className="px-4 py-5 bg-white sm:p-6">
        <div className="grid grid-cols-3 gap-6">
          <TextFieldForm
            type="text"
            label="First Name"
            name="first-name"
            id="first-name"
            oc="given-name"
          />

          <TextFieldForm
            type="text"
            label="Last Name"
            name="last-name"
            id="last-name"
            oc="family-name"
          />

          <TextFieldForm
            type="text"
            label="Email Address"
            name="email-address"
            id="email-address"
            oc="email"
          />
          
     

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <select
            
              id="country"
              name="country"
              autoComplete="country-name"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>India</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          <TextFieldForm
            type="number"
            label="Phone Number"
            name="phone-number"
            id="phone-number"
            oc="phone"
          />
          <TextFieldForm
            type="text"
            label="Street address"
            name="street-address"
            id="street-address"
            oc="street-address"
          />

          <TextFieldForm
            type="text"
            label="City"
            name="city"
            id="city"
            oc="city"
          />

          <TextFieldForm
            type="text"
            label=" State / Province"
            name="region"
            id="region"
            oc="region"
          />

          <TextFieldForm
            type="text"
            label="  ZIP / Postal code"
            name="postal-code"
            id="postal-code"
            oc="postal-code"
          />
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        {
          props.save ?    <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button> : null
        }
     
      </div>
    </div>
  </form>
  )
}
function Account() {
  return (
    <div>
      <div className="mt-10 sm:mt-0 text-left">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
           <AccountBox save={true}/>
          </div>
        </div>
      </div>
      <div className="mt-10">
      <OrderHistory />
      </div>
    </div>
  );
}

export default Account;
