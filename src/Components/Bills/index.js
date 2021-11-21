import React from "react";
import Table from "../Table";
function Bills() {
    const value = "Paid"
  return (
    <div className="w-full  m-10">
      <div className="flex justify-between">
        <h1 className="text-3xl m-4 text-left">Bills</h1>
        <h1 className="text-3xl m-4 text-left">Net Payable: 500</h1>
      </div>

      <div>
        <div className="bg-black rounded-lg w-full py-2 text-white grid grid-cols-7">
          <h1>CustId</h1>
          <h1 className="col-span-2">Customer Name</h1>
          <h1>OrderId</h1>
          <h1>Mobil No.</h1>
          <h1>Address</h1>
          <h1>Email</h1>
        </div>
        <div className="grid grid-cols-7 rounded-lg bg-gray-50 gap-5">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => {
            return (
              <>
                <div className="col-span-6">
                  <Table
                    entry1={"abcd"}
                    entry2={"abcd"}
                    entry3={"abcd"}
                    entry4={"abcd"}
                    entry5={"abcd"}
                  />
                </div>
               
                <h1 className={value === "Paid" ? "text-yellow-400 text-semibold": "text-danger  font-bold"}>{value}</h1>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Bills;
