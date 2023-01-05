import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import {motion} from 'framer-motion'

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
          <Typography variant="h4" sx={{ fontWeight:"600" }}>
                About the e-Consultation portal
            </Typography>
            <Typography variant="h4">
              About page
            </Typography>
          </Box>
          </Grid>
      </motion.span>
  </Box>
  )
}

export default About