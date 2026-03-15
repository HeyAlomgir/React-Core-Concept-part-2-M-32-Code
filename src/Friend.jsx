export default function Friend({frend}){
    console.log(frend);
   const {name,email,phone,website}=frend;
    return(
        <div className="Batsman-style">
            <h3>Name : {name} </h3>
            <p>Email : {email} </p>
            <p>Phone : {phone} </p>
            <p>Website : {website} </p>
        </div>
    )
}