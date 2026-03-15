import { useState } from 'react'
import './App.css'
export default function Counter(){
    const[count , setCount] = useState(0);

    const handleAdd = ()=>{
        const newCount = count+1;
        setCount(newCount);
    }
    return(
        <div className='counter-style'>
            <h3>Count: {count} </h3>
            <button className='btn' onClick={handleAdd}>Add</button>
        </div>
    )
}