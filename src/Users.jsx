import { Suspense, use } from 'react'
import './App.css'
export default function Users({fetchUsers}){
    const user =  use (fetchUsers)
    return(
        <div className='Batsman-style'>
            <h3>Users : {user.length} </h3>
        </div>
    )
    
}