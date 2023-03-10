import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { color, palette } from "@mui/system";
import { colors } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';

// create color design tokens

export const tokens = (mode) => ({
    ...(mode === "dark"
      ? {
          grey: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414",
          },
          primary: {
            100: "#212121",
            200: "#424242",
            300: "#616161",
            400: "#757575",
            500: "#9e9e9e",
            600: "#bdbdbd",
            700: "#e0e0e0",
            800: "#eeeeee",
            900: "#f5f5f5",
            50:"#fafafa"
          },
          greenAccent: {
            100: "#dbf5ee",
            200: "#b7ebde",
            300: "#94e2cd",
            400: "#70d8bd",
            500: "#4cceac",
            600: "#3da58a",
            700: "#2e7c67",
            800: "#1e5245",
            900: "#0f2922",
          },
          redAccent: {
            100: "#f8dcdb",
            200: "#f1b9b7",
            300: "#e99592",
            400: "#e2726e",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2c",
            800: "#58201e",
            900: "#2c100f",
          },
          blueAccent: {
            100: "#e1e2fe",
            200: "#c3c6fd",
            300: "#a4a9fc",
            400: "#868dfb",
            500: "#6870fa",
            600: "#535ac8",
            700: "#3e4396",
            800: "#2a2d64",
            900: "#151632",
          },
          brandColor:{
            100: "#212121",
            200: "#424242",
            300: "#616161",
            400: "#757575",
            500: "#03a9f4", 
            600: "#039be5",
            700: "#0288d1",
            800: "#0277bd",
            9000: "#01579b",
          },

          warningColor:{
            100: "#212121",
            200: "#424242",
            300: "#616161",
            400: "#757575",
            500:"#ffeb3b",
            600:"#fdd835",
            700:"#fbc02d",
            800:"#f9a825",
            900:"#f57f17"
          },

          dangerColor:{
            100:"#ffcdd2",
            200:"#ef9a9a",
            300:"#e57373",
            400:"#ef5350",
            500:"#f44336",
            600:"#e53935",
            700:"#d32f2f",
            800:"#c62828",
            900:"#b71c1c"
          }
        }
      : {
          grey: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0",
          },
          primary: {
            50:"#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd", // manually changed
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
          },
          greenAccent: {
            100: "#0f2922",
            200: "#1e5245",
            300: "#2e7c67",
            400: "#3da58a",
            500: "#4cceac",
            600: "#70d8bd",
            700: "#94e2cd",
            800: "#b7ebde",
            900: "#dbf5ee",
          },
          redAccent: {
            100: "#2c100f",
            200: "#58201e",
            300: "#832f2c",
            400: "#af3f3b",
            500: "#db4f4a",
            600: "#e2726e",
            700: "#e99592",
            800: "#f1b9b7",
            900: "#f8dcdb",
          },
          blueAccent: {
            100: "#151632",
            200: "#2a2d64",
            300: "#3e4396",
            400: "#535ac8",
            500: "#6870fa",
            600: "#868dfb",
            700: "#a4a9fc",
            800: "#c3c6fd",
            900: "#e1e2fe",
          },

          brandColor:{
            100: "#01579b",
            200: "#0277bd",
            300: "#0288d1",
            400: "#039be5", 
            500: "#03a9f4",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
          },

          warningColor:{
            100:"#f57f17",
            200:"#f9a825",
            300:"#fbc02d",
            400:"#fdd835",
            500:"#ffeb3b",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
          },

          dangerColor:{
            100:"#b71c1c",
            200:"#c62828",
            300:"#d32f2f",
            400:"#e53935",
            500:"#f44336",
            600:"#ef5350",
            700:"#e57373",
            800:"#ef9a9a",
            900:"#ffcdd2"
          }
      }
)});

// mui theme settings
export const themeSettings=(mode)=>{
    const colors=tokens(mode)

    return {
        palette:{
            mode:mode,
            ... (mode === 'dark' // colors for dark mode
             ? {
                primary:{
                    main:colors.primary[500],
                },

                secondary:{
                    main:colors.brandColor[200],
                },

                neutral:{
                    dark:colors.grey[700],
                    main:colors.grey[500],
                    light:colors.grey[100]
                },
                background:{
                    default:"#757575",
                }

             }
             
             :
             
             {
                primary:{
                    main:colors.primary[100],
                },

                secondary:{
                    main:colors.brandColor[200],
                },

                neutral:{
                    dark:colors.grey[700],
                    main:colors.grey[500],
                    light:colors.grey[100],
                },
                background:{
                    default:"#fafafa",
                }
             }
            ),
        },

        typography:{
            fontFamily:["roboto light", "sans-serif"].join(","),
            fontSize:12,

            h1:{
                fontFamily:["roboto light", "sans-serif"].join(","),
                fontSize:40,
            },

            h2:{
                fontFamily:["roboto light", "sans-serif"].join(","),
                fontSize:32,
            },

            h3:{
                fontFamily:["roboto light", "sans-serif"].join(","),
                fontSize:24,
            },

            h4:{
                fontFamily:["roboto light", "sans-serif"].join(","),
                fontSize:20,
            },

            h5:{
                fontFamily:["roboto light", "sans-serif"].join(","),
                fontSize:16,
            },

            h6:{
                fontFamily:["roboto light", "sans-serif"].join(","),
                fontSize:14,
            },
        }
    };
};

// App Langauges


// create react Context for color mode
export const ColorModeContext=createContext({
    toggleColorMode:()=>{

    }
});


export const useMode=()=>{
    const [mode, setMode]=useState("light");

    const colorMode=useMemo(
        ()=>({
            toggleColorMode:()=>
                setMode((prev)=>(prev==="light"?"dark":"light")),
        }),
        []);

        const theme=useMemo(()=>createTheme(themeSettings(mode)), [mode]);
        return [theme, colorMode];
}

export const LangaugeContext=createContext(null);
export const useLanguage=()=>{
  const appLanguages=[
    {
      code:'en',
      name:'English',
      country_code:'English'
    },
  
    {
      code:'am',
      name:'????????????',
      country_code:'Ethiopia'
    },
    {
      code:'oro',
      name:'Afan Oromo',
      country_code:'Ethiopia'
    },
  
    {
      code:'tg',
      name:'????????????',
      country_code:'Ethiopia'
    },
  ]

  const currentLanguageCode=cookies.get('i18next') || 'en'
  const [selectedLanguage, setSelectedLanguage]=useState(currentLanguageCode)
  const currentLanguage=appLanguages.find(l=>l.code===currentLanguageCode)
  const {t}=useTranslation()

  const changeLocale=useMemo((langCode)=>{
      setSelectedLanguage(i18next.changeLanguage(langCode))
  },[])

  return [selectedLanguage, changeLocale,t, currentLanguage, appLanguages]
}