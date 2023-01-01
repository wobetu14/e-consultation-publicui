import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import {Outlet, Route, Routes  } from 'react-router-dom';

import { ColorModeContext, useMode, tokens } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './partials/main-menu/Topbar'
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';

// import SideBarTest from './scenes/dashboard/global/SideBarTest';

const languages=[
  {
    code:'en',
    name:'English',
    country_code:'English'
  },

  {
    code:'am',
    name:'አማርኛ',
    country_code:'Ethiopia'
  },
  {
    code:'oro',
    name:'Afan Oromo',
    country_code:'Ethiopia'
  },

  {
    code:'tg',
    name:'ትግርኛ',
    country_code:'Ethiopia'
  },
]

function App() {
  const currentLanguageCode=cookies.get('i18next') || 'en'
  const currentLanguage=languages.find(l=>l.code===currentLanguageCode)
  const { t } = useTranslation()

  const [theme, colorMode]=useMode();

  // Setup dynamic font-size changer
  const [fontSize, setFontSize]=useState(20);
  // Dynamic top menu items
  const menuItemsText=[
    {id:1, linkText:"Home", to:"/"},
    {id:2,linkText:"About", to:"/about"},
    {id:3,linkText:"Contacts", to:"/contacts"},
  ];

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <main className='content' display="flex" justifyContent="space-between">
            <Topbar menuItems={menuItemsText} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create-account" element={<Registration />} />
              </Routes>
              <Outlet />
          </main> 
        </div>
      </ThemeProvider>


     {/*  <div>
            <button onClick={()=>setFontSize(fontSize-1)}>A-</button>
            <button onClick={()=>setFontSize(fontSize+1)}>A+</button>
            <h3>Choose Language</h3>
              <ul style={{ listStyleType:'none', color:'#1DA1F2' }}>
                {languages.map(({code,name})=>(
                  <li key={code}>
                    <button 
                    onClick={()=>i18next.changeLanguage(code)}
                    disabled={code===currentLanguageCode}
                    >{name}</button>
                  </li>
                ))}
              </ul>
          </div>
          <h2 style={{ fontSize:`${fontSize}px` }}>{t('greeting')}</h2>
          <p style={{ fontSize:`${fontSize}px` }}>{t("gratitude_msg")}</p> */}

    </ColorModeContext.Provider>
    
  );
}



export default App;


