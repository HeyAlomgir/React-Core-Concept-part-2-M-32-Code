import { use } from "react"
import Friend from "./Friend";

export default function Friends({fetcPromise}){
    const friends = use(fetcPromise);
    console.log(friends);
    return(
        <div className="Batsman-style">  
            <h3>Friends : {friends.length} </h3>

            {
                friends.map(frend => <Friend key={friends.id} frend={frend}></Friend> )
            }
        </div>
    )
}