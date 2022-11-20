import * as React from 'react';

import {Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


import axios from 'axios'



export default function SignUp() {


  

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);


      try{
        
        
        let image_url = await axios.get('https://api.thecatapi.com/v1/images/search');
        let response = await axios.post('http://localhost:8000/api/user/create/',
            {   

                'name': data.get('name'),
                "email": data.get('email'),
                "password": data.get('password'),
                "image_url" : image_url.data[0].url

            })
        
        
        if(response.status === 201){
            window.location.assign('/login');
        }

      }catch(err){
        console.log(err)
      }
      
    };
  
    

    return (
      
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#6c9886' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary" align="left" >
                  You will be redirected to login once submitted
                </Typography>
              </Grid>
  
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#6c9886' }}
              >
                Sign Up
              </Button>
  
            </Box>
          </Box>
          
        </Container>
      
    );
  }



