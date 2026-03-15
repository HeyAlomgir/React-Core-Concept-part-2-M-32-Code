export default function Comment({comment}){
    console.log(comment);
    const { id,name,email}=comment;
    return(
        <div className="Batsman-style">
            <h2>ID : {id} </h2>
            <p>Name : {name} </p>
            <p>Email : {email } </p>
        </div>
    )
}