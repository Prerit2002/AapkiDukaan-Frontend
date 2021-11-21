import React from 'react'

function Website() {
    return (
        <div className="flex flex-row h-full">
            <div className="flex flex-col  justify-between">
                { [0,1,2,3].map((i) => {
                    return  <div className="p-2 before:content-'' before:bg-black before:absolute relative before:bg-yellow-100 before:w-2 justify-between  rounded-full bg-yellow-100">a</div>

                }) }
               
                
            </div>
            
            
        </div>
    )
}

export default Website
