import {Box, AppBar, Toolbar, IconButton, Typography , Button} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import './navv.css'




export default function Navv(){


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='navv'>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                CatWorx Issue Tracker
                </Typography>
                <GitHubIcon/>
            </Toolbar>
            </AppBar>
        </Box>
    )
}