import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [product, setProduct] = useState([]);
  console.log("get ready for the memorial branch")
console.log('checking if conflict creates or not');
console.log("again im merging to the main branch ")
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setProduct(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  })
  return (
    <>
     <h1>Hello Frontend</h1>
     <div>Products : {product.length}</div>
     {
      product.map((prod,i)=>{
          return(<div>
            <h1>{prod.id}</h1>
            <p>{prod.title}</p>
            <h3>{prod.price}</h3>
          </div>)
      })
     }
    </>
  )
}

export default App
