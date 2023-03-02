import React from "react";
import { Stack, Typography, Box } from '@mui/material'


import AboutBox from "./AboutBox";
import Info from "./Info";

export default function About() {
   
   

    return (
        <Stack py={7}>
            <Typography sx={{ fontFamily: "Work Sans", fontSize: 36, alignSelf: 'center' }}>Our Reputation</Typography>
            <AboutBox/>
            <Info/> 
        </Stack>
    )
}