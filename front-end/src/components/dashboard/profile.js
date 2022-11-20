




export default function Profile({userData}){

    const {email, name, image_url} = userData
    
    return(
        <>
            <img src={image_url} className="profile-pic" />
            <h3>{name}</h3>
            <h5>{email}</h5>
            
        </>
    )
}