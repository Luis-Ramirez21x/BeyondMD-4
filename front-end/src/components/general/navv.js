import {Box, AppBar, Toolbar, IconButton, Typography , Button, Link} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import PestControlIcon from '@mui/icons-material/PestControl';
import LogoutIcon from '@mui/icons-material/Logout';
import auth from '../../util/auth'
import './navv.css'




export default function Navv(){


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='navv'>
            <Toolbar>
                
                <PestControlIcon style={{height:'30px', width:'30px'}}/>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link href='/dashboard' style={{textDecoration:'none',color:'inherit'}}>
                    CatWorx Issue Tracker
                </Link>
                </Typography>
                <Link href='https://github.com/Luis-Ramirez21x' style={{color:'inherit', marginRight:'10px'}}>
                    <GitHubIcon style={{height:'30px', width:'30px'}}/>
                </Link>
                <Link onClick={auth.logout} style={{color:'inherit' }}>
                    <LogoutIcon style={{height:'30px', width:'30px'}}/>
                </Link>
            </Toolbar>
            </AppBar>
        </Box>
    )
}