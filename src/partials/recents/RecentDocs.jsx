import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab, Typography } from '@mui/material'
import React, { useState } from 'react'

import RegulationDocs from '../../partials/document-list/Regulations'
import ProclamationDocs from '../../partials/document-list/Prclamations'
import DirectiveDocs from '../../partials/document-list/Directives'


const RecentDocs = () => {
  const [value, setValue]=useState('1')
  const handleChange=(event, newValue)=>{
    setValue(newValue)
  }
  return (
    <Box sx={{ margin:"5px 5px"}}>
      <Box width="100%" sx={{ padding:"10px" }}>
        <Typography variant='h4' sx={{ fontWeight:"400" }}>Most recent documents</Typography>
      </Box>
      <TabContext value={value} sx={{ padding:"40px" }}>
        <Box sx={{ borderBottom:1, borderColor:'divider',  width:"300px" }} flexDirection="up">
          <TabList aria-label="Tabs example" 
          onChange={handleChange} 
          textColor={'secondary'} 
          indicatorColor="secondary"
          centered
          >
            <Tab label="Regulations" value='1' />
            <Tab label="Proclamations" value='2' />
            <Tab label="Directives" value='3' />
          </TabList>
        </Box>

        <TabPanel value='1'>
        <Typography variant='h5' sx={{ marginBottom:"15px", fontWeight:400 }}>
          Brief List of Regulation documents.
        </Typography> 
         <RegulationDocs />
        </TabPanel>
        <TabPanel value='2'>
        <Typography variant='h5' sx={{ marginBottom:"15px", fontWeight:400 }}>
          Brief List of Proclamation Documents.
        </Typography>
         <ProclamationDocs />
        </TabPanel>
        <TabPanel value='3'>
        <Typography variant='h5' sx={{ marginBottom:"15px", fontWeight:400 }}>
          Brief List of Directives.
        </Typography>
          <DirectiveDocs />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default RecentDocs