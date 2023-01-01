import {Avatar, Box, Button, Checkbox, FormControl, FormControlLabel, Grid, Paper, TextField, Typography, useTheme } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { tokens, useMode } from '../../theme';
import { Link } from 'react-router-dom';

const Login = () => {
   const theme=useTheme();
   const colors=tokens(theme.palette.mode)
  return (
    <Box sx={{ marginTop:"170px" }}>
      <Paper
        elevation={1} 
        sx={{ padding:"20px", height:"50vh", margin:"20px auto", width:"350px" }}
      >
        <Grid align="center">
          <Avatar sx={{ backgroundColor:colors.brandColor[200], width:"40px", height:"40px", marginBottom:"5px" }}>
            <LockOutlinedIcon sx={{ width:"20px", height:"20px" }} />
          </Avatar>
          <Typography variant='h5' sx={{ fontWeight:400, paddingBottom:'20px' }} >
            Sign In
          </Typography>
        </Grid>

        <Grid>
        <TextField 
          label="User Name" 
          variant='outlined' 
          placeholder='Enter user name'
          required 
          fullWidth
          size='small'
          sx={{ paddingBottom:"10px" }}
          color="info"
        />
        <TextField 
          label="Password" 
          type="password"
          variant='outlined' 
          placeholder='Enter password' 
          required 
          fullWidth 
          size='small'
          sx={{ paddingBottom:'5px' }}
          color="info"
        />
        </Grid>

        <Grid 
          sx={{ paddingBottom:"5px" }}
        >
        <FormControlLabel
          control={
            <Checkbox
              name="checkeboxname"
              color='info'
               />
          }
          label="Remember me"
        />
        
        <Button type='submit' variant='outlined' fullWidth
          sx={{ backgroundColor:colors.brandColor[200], color:colors.grey[900] }}
          color='info'
        >
          Sign In</Button>
        </Grid>
          <Typography>
            <Link href="#">
              Forgot password?
            </Link>
          </Typography>
          <Typography>
            Don't you have an account? &nbsp;
            <Link href="#">
              Sign up
            </Link>
          </Typography>
      </Paper>
    </Box>
  )
}

export default Login