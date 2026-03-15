
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter' 

function App() {

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
