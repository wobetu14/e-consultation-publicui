import { useTheme } from '@emotion/react'
import { AppBar, Grid, IconButton, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { ColorModeContext, tokens } from '../theme'
import { useTranslation } from 'react-i18next'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    const theme=useTheme()
    const colors=tokens(theme.palette.mode)
    const colorMode=useContext(ColorModeContext);

    const {t}=useTranslation()
    // Get Date and time
    const date=new Date();
    const year=date.getFullYear();
  return (
     <Box sx={{backgroundColor:colors.primary[100], zIndex:0, position:"bottom" }}>
                    <Grid container>
                     <Grid item xs={5}>
                        <Box sx={{
                            paddingRight:"25px", 
                            paddingTop:"150px", 
                            marginRight:"20px",
                            textAlign:"center"}}>

                            <Typography variant="h3" sx={{ fontWeight:600, color:colors.brandColor[200] }}>
                                {t('ethiopia')}
                            </Typography>
                            <Typography variant='h4'>
                            {t('fdre')}
                            </Typography>
                            <Typography variant="subtitle">
                                {t('e_consultation_portal')}
                            </Typography>
                        </Box>
                    </Grid>   
                    <Grid item xs={4}>
                        <Typography variant="h4" sx={{paddingTop:"30px", fontWeight:600, color:colors.brandColor[200] }}>
                            {t('address')}
                        </Typography>
                            <br />
                        <Box sx={{
                            height:"50vh", 
                            paddingRight:"25px", 
                            marginRight:"20px",
                            }}>
                            
                            <Typography variant='h5' sx={{ fontWeight:600 }}>
                                <LocationOnIcon /> &nbsp;
                                Location
                            </Typography>
                            <Typography variant="h6">
                            Addis Ababa, Arada Subcity, Behind Lisse Gebre Mariam School
                            </Typography>
                            <br /><br />
                            <Typography variant='h5' sx={{ fontWeight:600 }}>
                                <EmailIcon />&nbsp;
                                Email
                            </Typography>
                            <Typography variant="h6">
                            contact@mint.gov.et
                            </Typography>
                            <br /><br />

                            <Typography variant='h5' sx={{ fontWeight:600 }}>
                                <PhoneIcon /> &nbsp;
                                Phone Number
                            </Typography>
                            <Typography variant="h6">
                            +251 112 657 37
                            </Typography>
                            <br /><br />
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                    <Typography variant="h4" sx={{paddingTop:"30px", fontWeight:600, color:colors.brandColor[200] }}>
                            Social media
                        </Typography>
                            <br />
                        <Box sx={{
                            // height:"50vh", 
                            paddingRight:"25px", 
                            marginRight:"20px",
                            }}>
                            
                            {/* <Typography variant='h1' sx={{ fontWeight:600 }}> */}
                                <FacebookIcon sx={{ fontSize:"30px", paddingRight:"5px", color:colors.brandColor[100] }} />
                                <TwitterIcon sx={{ fontSize:"30px", paddingRight:"5px", color:colors.brandColor[100] }}/>
                                <LinkedInIcon sx={{ fontSize:"30px", paddingRight:"5px", color:colors.brandColor[100] }}/>
                                <YouTubeIcon sx={{ fontSize:"30px", paddingRight:"5px", color:colors.brandColor[100] }}/>
                            {/* </Typography> */}
                        </Box>
                    </Grid>   
            </Grid>

            <Grid container>
                {/* <Grid item={12}> */}
                    <Box sx={{ padding:"25px", backgroundColor:colors.brandColor[200], width:"100%" }}>
                      <Typography variant="h6" sx={{ fontWeight:600, color:"white" }}>
                            &copy; {year} {t('attorney_general')}. 
                      </Typography>
                    </Box>
                {/* </Grid> */}
            </Grid>
      </Box>
  )
}

export default Footer