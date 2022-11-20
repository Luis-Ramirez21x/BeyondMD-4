import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import auth from '../util/auth'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TicketDetails from "../components/dashboard/tickets/ticketDetails";
import Comments from "../components/dashboard/tickets/comments";
import { Button } from "@mui/material";

let token = auth.getToken()
axios.defaults.headers.common['Authorization'] = "Token " + token




export default function SingleTicket(){
    const { ticketId } = useParams();
    const [ticketData, setTicketData] = useState();
    const [loading, setLoading] = useState(true);

    

    useEffect(() =>{

        axios.get('http://localhost:8000/api/ticket/tickets/' + ticketId +'/')
            .then( res => setTicketData(res.data) )
            .catch( error => console.log(error) )
            .finally( () => setLoading(false) )

    },[])

    async function handleStatusChange(){
        
        try{
            let data = await axios.patch('http://localhost:8000/api/ticket/tickets/' + ticketId +'/',{
                "is_open": !ticketData.is_open
        })
            window.location.reload()
        }catch (err) {
          console.error(err);
        }

    }

    async function handleDelete(){

        try{
            let data = await axios.delete('http://localhost:8000/api/ticket/tickets/' + ticketId +'/')
            window.location.assign('/dashboard');
        }catch (err) {
          console.error(err);
        }

    }



    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }

    
    return(
        <>
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
            >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3} sx={{justifyContent:'center', marginTop:'50px'}}>
                    
                    
                    {/* Company News Banner */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignContent: 'center',
                            alignItems: 'center',
                            
                        }}
                        >
                        <TicketDetails ticketData={ticketData}/>
                        </Paper>

                    <Button color='error' 
                        variant="contained" 
                        style={{marginRight:"5px"}}
                        onClick={handleDelete}>
                        Delete
                    </Button>         
                    <Button color="primary" 
                        variant="contained"
                        onClick={handleStatusChange}
                    >Change Status
                    </Button>  
                    </Grid>
      {/*              
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
      
                            
                        }}
                        >
                        <Comments ticketData={ticketData}/>
                        </Paper>
                    </Grid>

           */} 
  
                    </Grid>
                    
                </Container>
        </Box>
        </>
    )

}