import axios from "axios"
import { useEffect, useState } from "react"
import PestControlIcon from '@mui/icons-material/PestControl';





export default function RandomFacts(){
    let [catFact, setCatFact] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        axios.get('https://meowfacts.herokuapp.com/')
            .then( res => setCatFact(res.data) )
            .catch( error => console.log(error) )
            .finally( () => setLoading(false) )
        
    },[])

    
    if(loading){
        return(
            <h3>Loading...</h3>
        )
    }
    

    return(
        <>
            <div className="news-header">
                <PestControlIcon style={{height:'20px', width:'20px'}}/>
                <h3>Company News</h3>
            </div>

            <p>{catFact.data[0]}</p>

        </>
    )
}