
function Table({entry1 , entry2 , entry3 , entry4 , entry5}) {
    return (
        <div className="grid grid-cols-6">
            <h1>{entry1}</h1>
            <h1 className="col-span-2">{entry2}</h1>
            <h1>{entry3}</h1>
            <h1>{entry4}</h1>
            <h1>{entry5}</h1>
            
        </div>
    )
}

export function UnivTable (props) {
  if (props.Responses.length>0) {
    let Headers = Object.keys(props.Responses[0])
    return (
      <table class="table-auto border-collapse ">
      <thead className="bg-darkGrey text-white">
        <tr className="">
            {Headers.map(th => {
                return (
                    <th className="p-3">{th}</th>
                )
            })}
            {   props.Delete ? <td>Delete</td> : null}
        </tr>
      </thead>
      <tbody>
        {
          props.Responses.map(th => {
            return (
              <tr className="m-3">   
              {Headers.map(function(key) {
                let v = th[key]
                return (
                  <td className="p-3">{v}</td>
                )
              })}
              {
                props.Delete ? <button onClick={(e)=>{
                  e.preventDefault()
                  props.Delete(th)
                }} > <td className="p-3">Delete</td> </button> : null
              }
              </tr>
              )})
        }
        
      </tbody>
    </table>
    ) 
  }
 else {
   return (
   <>
   <table class="table-auto border-collapse ">
    <th>
      Nothing here as of Now
    </th>
   </table>
   </>
   )
 }

}

export default Table