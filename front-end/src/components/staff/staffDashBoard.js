import { useEffect, useState } from "react";
import auth from "../../util/auth";
import axios from 'axios'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Profile from "../dashboard/profile";
import TicketTable from "../dashboard/tickets/ticketTable";
import CreateTicket from "../dashboard/tickets/createTicket";



export default function StaffDasboard({userData}){
    const [tickets, setTickets] = useState();
    const [loading, setLoading] = useState(true);
    let token = auth.getToken()
    axios.defaults.headers.common['Authorization'] = "Token " + token

    useEffect(() => {
        
        axios.get('http://localhost:8000/api/ticket/tickets/')
        .then( res => setTickets(res.data) )
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
                    <Grid container spacing={3}>
                    {/* Profile Info */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            alignItems: 'Center',
                            flexDirection: 'column',
                            height: 240,
                            color: '#6c9886'
                        }}
                        >
                        <Profile userData={userData}/>
                        </Paper>
                    </Grid>
                    {/* Company News Banner */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                        >
                        <CreateTicket userData={userData}/>
                        </Paper>
                    </Grid>
                    {/* Tickets */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <TicketTable tickets={tickets}/>
                        </Paper>
                    </Grid>
                    </Grid>
                    
                </Container>
                </Box>
            
        </>
    )
}