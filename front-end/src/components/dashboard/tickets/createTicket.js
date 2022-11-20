import { useEffect, useState } from "react";
import auth from "../../../util/auth";
import axios from 'axios'
import { Button, TextField, Grid, Box, Checkbox, FormControlLabel} from '@mui/material'





export default function CreateTicket({userData}){
    let token = auth.getToken()
    axios.defaults.headers.common['Authorization'] = "Token " + token
    let [state, stateReload] = useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
  
        try{
  
          let response = await axios.post('http://localhost:8000/api/ticket/tickets/',
          {
              "ticket_type": data.get('ticket_type'),
              "description": data.get('description'),
              "is_highPriority": data.get("priority") === null ? false : true
          })
          
          window.location.assign(`/ticket/${response.data.id}`)
  
        }catch(err){
          console.log(err)
        }
        
      };


    return(
        <>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>

                <Grid item xs={6}>
                  <TextField
                    required
                    
                    id="ticket_type"
                    label="Ticket Type"
                    name="ticket_type"
                    
                  />
                </Grid>
                <Grid item xs={6}>
                <FormControlLabel
                  control={<Checkbox value="high_priority" color="primary" />}
                  label="High Priority"
                  id="priority"
                  name="priority"
                />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="description"
                    label="Description"
                    placeholder="Describe the issue and provide specific details..."
                    type="text"
                    id="description"
                  />
                </Grid>
  
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