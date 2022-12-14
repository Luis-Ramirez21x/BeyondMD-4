import * as React from 'react';

import {Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, Link} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


import axios from 'axios'
import auth from '../util/auth';


export default function Login() {


    let response;

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);


      try{

        response = await axios.post('http://localhost:8000/api/user/token/',
        {
            "email": data.get('email'),
            "password": data.get('password')
        })
        auth.login(response.data.token)

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
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>

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
  
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#6c9886' }}
              >
                Login
              </Button>
              <Grid container>
                  <Grid item>
                      <Link href="/" variant="body2" style={{color:'#6c9886'}}>
                        {"Don't have an account? Sign Up!"}
                      </Link>
                  </Grid>
              </Grid>


              
            </Box>
          </Box>
          
        </Container>
      
    );
  }