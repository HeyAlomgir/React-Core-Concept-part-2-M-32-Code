import { useState } from "react"
import './App.css'

export default function Batsman(){
    const [runs , setRuns] = useState(0);
    const [sixes , setSixes]=useState(0);

    const handleSingle = ()=>{
        const newRuns = runs+1;
        setRuns(newRuns);
    }
    const handleDouble = ()=>{
        const newRuns = runs+2;
        setRuns(newRuns);
    }
    const handleThree = ()=>{
        const newRuns = runs+3;
        setRuns(newRuns);
    }
    const handleFour = ()=>{
        const newRuns = runs+4;
        setRuns(newRuns);
    }
    const handleSix = ()=>{
        const newRuns = runs+6;
        setRuns(newRuns);

        const upDateSix = sixes+1;
        setSixes(upDateSix);

       

    } 
    return(
        <div className="Batsman-style">
            <h3>Player : BanglaDesi Batsman</h3>
            <p><small>Six : {sixes}</small></p>
            {
                runs>50 && <p>Your Score : 50 Done </p>
            }
            {
                runs>100 && <p>Your Score : 100 Done</p>
            }
    
           
            <h1>Score: {runs} </h1>
            <button className="btn" onClick={handleSingle}>single</button>
            <button className="btn" onClick={handleDouble}>Double</button>
            <button className="btn" onClick={handleThree}>Three</button>
            <button className="btn" onClick={handleFour}>Four</button>
            <button className="btn" onClick={handleSix}>Six</button>
        </div>
    )
}