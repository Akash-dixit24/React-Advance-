import React from 'react'
import { useSelector } from 'react-redux'


const count = useSelector((state) => state.Counter.value)
console.log(count )

const Counter = () => {
  return (
    <div>
       <button>increment</button>

       <br/>
       <br/>


       <div>{count}</div>

       <br/>
       <br/>

       <button>decrement</button>
    </div>
  )
}

export default Counter