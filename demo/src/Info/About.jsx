import React from "react";
import { Stack, Typography, Box } from '@mui/material'
import AboutBox from "./AboutBox";
import Info from "./Info";  

import AOS from 'aos'
import "aos/dist/aos.css";
AOS.init({
  duration: 1200
});

export default function About() {
   
    
    return (
        <Stack py={7}> 
            <AboutBox/> 
            <Info/> 
        </Stack>
    )
}