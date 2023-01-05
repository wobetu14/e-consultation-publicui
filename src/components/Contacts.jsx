import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import {motion} from 'framer-motion'

const Contacts = () => {
  return (
    <Box  margin="110px 0">
      <motion.span
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.3 }}
      >
        <Grid container sx={{ paddingTop:"20px", margin:"20px", display:"flex", justifyContent:"space-between" }}>
          <Box>
          <Typography variant="h4" sx={{ fontWeight:"600" }}>
                Contact as
            </Typography>
            <Typography variant="h4">
              Home page
            </Typography>
          </Box>  
        </Grid>
      </motion.span>    
    </Box>
  )
}

export default Contacts