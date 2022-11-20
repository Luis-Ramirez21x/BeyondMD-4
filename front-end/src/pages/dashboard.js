import { useEffect, useState } from "react"
import auth from "../util/auth";
import axios from 'axios'
import AdminDasboard from "../components/admin/adminDashBoard";
import StaffDasboard from "../components/staff/staffDashBoard";
import '../components/dashboard/dashboard.css'


 
export default function Dashboard(){
    const [userData, setData] = useState();
    const [loading, setLoading] = useState(true);
    let token = auth.getToken()
    axios.defaults.headers.common['Authorization'] = "Token " + token
    
    useEffect(() => {
        
        axios.get('http://localhost:8000/api/user/me/')
        .then( res => setData(res.data) )
        .catch( error => console.log(error) )
        .finally( () => setLoading(false) )

    }, [])

    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }

    
    return(
        <>
            {userData.isAdmin == true ? <AdminDasboard userData={userData}/> 
            :
            <StaffDasboard userData={userData}/>
            }
        </>
    )

}