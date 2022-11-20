import { Button, FormControl, FormLabel } from "@mui/material";
import { useState } from "react";
import axios from 'axios'
import auth from '../../../util/auth'
import { Box, Grid, TextField} from '@mui/material'

let token = auth.getToken()
axios.defaults.headers.common['Authorization'] = "Token " + token




export default function Comments({ticketData}){



    async function handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        
        try{
            let response = await axios.patch('http://localhost:8000/api/ticket/tickets/' + ticketData.id +'/',{
                ...ticketData,
                comments : [{'text':data.get('text')}]
        })

        //window.location.reload()
            
        }catch (err) {
          console.error(err);
        }
    }

return(
    <>
        <h3 style={{color:'#6c9886', align:'right'}}>Comments:</h3>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="text"
                    label="Add Comment"
                    placeholder="Describe status updates on ticket..."
                    type="text"

                  />
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: '#6c9886' }}
                >
                    Create Ticket
                </Button>

            </Box>
    </>
)

}