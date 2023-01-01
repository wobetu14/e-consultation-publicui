import { Box, Grid, InputBase, Paper, TextField, Typography, useTheme } from "@mui/material";
import DocumentDisplayTabs from "../partials/DocumentDisplayTabs";
import RecentDocs from "../partials/recents/RecentDocs";
import StatBox from "../partials/StatBox";
import { useMode, tokens } from "../theme";
import Login from "./auth/Login";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";
import HeroImage from "../images/hero.png"

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box margin="110px 0px">
      <Box sx={{ 
        backgroundImage:`url(${HeroImage})`,
        height:"55vh", 
        marginBottom:"30px"
         }}>

         <Grid container sx={{ paddingTop:"20px", margin:"20px", display:"flex", justifyContent:"space-between" }}>
          <Grid>
            <Typography variant="h4" sx={{ fontWeight:"600" }}>
              The Federal Democratic Republic of Ethiopia
            </Typography>
            <Typography variant="h4" sx={{ fontWeight:"500" }}>
              E-Consultation Portal
            </Typography>
          </Grid>
          <Grid container sx={{ paddingTop:"30px", margin:"20px", display:"flex", justifyContent:"space-between" }}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Paper elevation={1} sx={{ backgroundColor:colors.primary[200], borderRadius:'5px', display:'flex', padding:"3px", opacity:"90%" }}>
                <InputBase variant="outlined" placeholder="Search documents..." fullWidth sx={{ padding:"5px", fontSize:"16px", fontWeight:500 }} />
                <SearchIcon sx={{ textAlign:"center", padding:'8px', width:'40px', height:'40px', cursor:"pointer", color:grey[600]}}></SearchIcon>
              </Paper>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
         </Grid>

        <Grid container sx={{ paddingTop:"50px", margin:"20px", display:"flex", justifyContent:"space-between" }}>
          <Grid item xs={3} >
            <StatBox
                title="16"
                subtitle="Proclamations"
              />  
          </Grid>

          <Grid item xs={3}>
            <StatBox
                title="23"
                subtitle="Regulations"
              />
          </Grid>
          <Grid item xs={3}>
            <StatBox
                title="23"
                subtitle="Directives"
              /> 
          </Grid>
          <Grid item xs={3}>
            <StatBox
                title="36"
                subtitle="Open for comment"
              /> 
          </Grid>
          </Grid>
      </Box>
      
        <Box display="flex" justifyContent="space-between">
          <Box sx={{ width:"70%" }}>
            <DocumentDisplayTabs />
          </Box>
          <Box sx={{ width:"30%" }}>
            <RecentDocs />
            <RecentDocs />
          </Box>
        </Box>
        
      </Box>    
  );
};

export default Home;