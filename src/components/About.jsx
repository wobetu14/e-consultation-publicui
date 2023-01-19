import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import {motion} from 'framer-motion'
import WelcomePage from './WelcomePage';


const About = () => {
  return (
    <Box margin="110px 0">
      <motion.span
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5 }}
      >
        <Grid container sx={{ paddingTop:"20px", margin:"20px", display:"flex", justifyContent:"space-between" }}>
        <Box>
          <Typography variant="h2" sx={{ fontWeight:"600" }}>
            Welcome To Geeksforgeeks
            </Typography>
            <Typography variant="h4">
              <a href='#course'><button>Courses</button></a>
              <a href='#article'><button>Articles</button></a>
            </Typography>
            <WelcomePage />
          </Box>
          </Grid>
      </motion.span>
  </Box>
  )
}

export default About