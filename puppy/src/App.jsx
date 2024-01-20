
import { useState } from 'react';
import './App.css'
import { puppyList } from './data.js';


function App() {
  const [featPupId, setFeatPupId] = useState(null)
  const [puppies, setPuppies] = useState(puppyList)
  
  // const puppyState = useState(puppyList) // returns an array --> [value, setterFunction]
  // const puppies = puppyState[0]
  // const setPuppies = puppyState[1]
  // const URL = `https://myAPI.com/api/student/${studentId}` // "https://myAPI.com/api/student/" + studentId
  // const jsxExample = `
  // <>
  //   <div>
  //     ${puppies}
  //   </div>
  // </>
  // `
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)
  return (
    <>
      <div className = 'test'>
        {puppies.map((puppy) =>{
          console.log("puppy id:", puppy.id,)
          return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })}
      </div>
      {featPupId && (<div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>) }
    </>
  )
}

export default App;
