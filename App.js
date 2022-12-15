import {useState} from "react"

function App() {
  const [value,setvalue]= useState(0)
  return  (
    <div>
      <h1>Counter App</h1>
      <p>{value}</p>
      <button className="brn" onClick={()=> setvalue(value+1)}>increase</button>
      <button className="brn" onClick={()=> setvalue(value-1)}>decrease</button>
      <button className="brn" onClick={()=> setvalue(0)}>reset</button>
    </div>

  )
 
 
}

export default App;
