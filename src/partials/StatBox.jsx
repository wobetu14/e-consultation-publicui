import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

import React from 'react'

const StatBox = ({title, subtitle }) => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
  return (
    // <Box width="100%" m="0 30%">
        
            <Box 
                sx={{
                width: 250,
                height: 170,
                cursor:"pointer",
                padding:"30px",
                }}>
               <Typography
                variant="h1"
                fontWeight="100"
                sx={{ color:colors.brandColor[200], textAlign:"center", fontSize:"60px" }}
               >
                   {title}
               </Typography> 
           
            <Typography
                variant="h4"
                sx={{textAlign:"center" }}
               >
                   {subtitle}
               </Typography> 
            </Box>
        
    // </Box>

  )
}

export default StatBox