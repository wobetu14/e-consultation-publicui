import {Avatar, Box, Button, Checkbox, FormControl, FormControlLabel, Grid, Paper, TextField, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

const Login = () => {
   const theme=useTheme();
   const colors=tokens(theme.palette.mode)
  return (
    <Box sx={{ marginTop:"170px"}}>
      <Paper
        elevation={1} 
        sx={{ padding:"15px", height:"75vh", margin:"20px auto", width:"350px" }}
      >
        <Grid align="center">
          <Avatar sx={{ backgroundColor:colors.greenAccent[300], width:"40px", height:"40px", marginBottom:"5px" }}>
            <PersonAddOutlinedIcon sx={{ width:"20px", height:"20px" }} />
          </Avatar>
          <Typography variant='h5' sx={{ fontWeight:400, paddingBottom:'20px' }} >
            Create account
          </Typography>
        </Grid>

        <Grid>
        <TextField 
          label="First Name" 
          variant='outlined' 
          placeholder='Enter your first name'
          required 
          fullWidth
          size='small'
          sx={{ paddingBottom:"10px" }}
          color="info"
        />

        <TextField 
          label="Father Name" 
          variant='outlined' 
          placeholder='Enter your father name'
          required 
          fullWidth
          size='small'
          sx={{ paddingBottom:"10px" }}
          color="info"
      />

        <TextField 
          label="Gradfather Name" 
          variant='outlined' 
          placeholder='Enter your grandfather name'
          required 
          fullWidth
          size='small'
          sx={{ paddingBottom:"10px" }}
          color="info"
        />

        <TextField 
          label="Email" 
          variant='outlined' 
          placeholder='Enter email address'
          required 
          fullWidth
          size='small'
          sx={{ paddingBottom:"10px" }}
          color="info"
        />

        <TextField 
          label="Mobile number" 
          variant='outlined' 
          placeholder='Enter your mobile number' 
          required 
          fullWidth 
          size='small'
          sx={{ paddingBottom:'5px' }}
          color="info"
        />

        <TextField 
          label="User Name" 
          variant='outlined' 
          placeholder='Enter user name' 
          required 
          fullWidth 
          size='small'
          sx={{ paddingBottom:'5px' }}
          color="info"
        />

        <TextField 
          label="Password" 
          type="password"
          variant='outlined' 
          placeholder='Enter new password' 
          required 
          fullWidth 
          size='small'
          sx={{ paddingBottom:'5px' }}
          color="info"
        />

        <TextField 
          label="Confirm password" 
          type="password"
          variant='outlined' 
          placeholder='Enter your password again' 
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
          label="I accept the terms and conditions."
        />
        
        <Button type='submit' variant='outlined' fullWidth
          sx={{ backgroundColor:colors.brandColor[200], color:colors.grey[900] }}
          color='info'
        >
          Create Account</Button>
        </Grid>
      </Paper>
    </Box>
  )
}

export default Login