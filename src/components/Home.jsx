import { Box, Grid, InputBase, Paper, TextField, Typography, useTheme } from "@mui/material";
import DocumentDisplayTabs from "../partials/DocumentDisplayTabs";
import RecentDocs from "../partials/recents/RecentDocs";
import StatBox from "../partials/StatBox";
import { useMode, tokens } from "../theme";
import Login from "./auth/Login";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";
import HeroImage from "../images/hero.png"
import { useTranslation } from "react-i18next";
import {motion} from 'framer-motion'

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {t}=useTranslation()

  return (
    <Box margin="110px 0px">
      <motion.span
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.3 }}
      >
      <Box sx={{ 
        backgroundImage:`url(${HeroImage})`,
        height:"55vh", 
        marginBottom:"30px"
         }}>

         <Grid container sx={{ paddingTop:"20px", margin:"20px", display:"flex", justifyContent:"space-between" }}>
          <Grid>
            <Typography variant="h4" sx={{ fontWeight:"600" }}>
              {t("fdre")}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight:"500" }}>
              {t("e_consultation_portal")}
            </Typography>
          </Grid>
          <Grid container sx={{ paddingTop:"30px", margin:"20px", display:"flex", justifyContent:"space-between" }}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Paper elevation={1} sx={{ backgroundColor:colors.primary[200], borderRadius:'5px', display:'flex', padding:"3px", opacity:"90%" }}>
                <InputBase variant="outlined" placeholder={`${t('search_documents')}...`} fullWidth sx={{ padding:"5px", fontSize:"16px", fontWeight:500 }} />
                <SearchIcon sx={{ textAlign:"center", padding:'8px', width:'40px', height:'40px', cursor:"pointer", color:grey[600]}}></SearchIcon>
              </Paper>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
         </Grid>

        <Grid container sx={{ paddingTop:"20px", margin:"20px", display:"flex", justifyContent:"space-between" }}>
          <Grid item xs={3} >
            <StatBox
                title="16"
                subtitle={t('proclamations')}
              />  
          </Grid>

          <Grid item xs={3}>
            <StatBox
                title="23"
                subtitle={t('regulations')}
              />
          </Grid>
          <Grid item xs={3}>
            <StatBox
                title="23"
                subtitle={t('directives')}
              /> 
          </Grid>
          <Grid item xs={3}>
            <StatBox
                title="36"
                subtitle={t('open_for_comment')}
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
      </motion.span>
    </Box>    
  );
};

export default Home;
