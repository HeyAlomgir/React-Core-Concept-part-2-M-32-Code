
import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter' 
import Users from './Users'
import Friends from './Friends'
import Comments from './Comments'


 const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

 const fetchFriends = async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();

}

const fetchComment  = async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  return res.json();
}
 

 function App() {
  const fetcPromise = fetchFriends();
  const fetchCommentPromise = fetchComment();

  function handleClick1 (){
    alert("Click 1")
  }

// arrow funcation clicked event handle

const handleClick3 = ()=>{
  alert("clicked 3")
}


// added arrow funcation onclik event handle

const handleAdd5=(num)=>{
  const newNum = num+5;
  alert(newNum);
}

  return (
    <>
    <Suspense fallback={<h3 className='Batsman-style'>Looading....</h3>}>
      <Users fetchUsers={fetchUsers}></Users>
    </Suspense>

    <Suspense fallback={<h3 className='Batsman-style'>Coming Friend...</h3>}>
    <Friends fetcPromise={fetcPromise} ></Friends>
    </Suspense>

    <Suspense fallback={<h3 className='Batsman-style'>Loding Comment...</h3>}>
    <Comments fetchCommentPromise={fetchCommentPromise} ></Comments>
    </Suspense>

    <Counter></Counter>
    <Batsman></Batsman>

  
        

{/* normal funcation cliked */}
    <button className='btn' onClick={handleClick1}>Click me 1</button>

    <button className='btn' onClick={function handleClick2 (){
      alert("clicked 2")
    }}>Click me 2</button>



    {/* arrow funcation cliked */}


    <button className='btn' onClick={handleClick3}>Click me 3</button>

    <button className='btn' onClick={()=>{
      alert("clicked 4")
    }}>Click me 4</button>




  <button className='btn' onClick={()=>handleAdd5(10)}>Click me 3</button>
         
       
  

      
    </>
  )
}

export default App
