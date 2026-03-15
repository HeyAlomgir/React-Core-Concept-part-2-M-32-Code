import { use } from "react"
import Comment from "./comment"; 

export default function Comments({fetchCommentPromise}){
    const Comments = use (fetchCommentPromise);
    return(
        <div className="Batsman-style">
            <h1>Comments: {Comments.length} </h1>
            {
                Comments.map(comment => <Comment comment={comment} ></Comment>)
            }
        </div>
    )
}