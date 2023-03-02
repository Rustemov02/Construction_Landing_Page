import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import Navbar from "./Navbar";
import building from './images/building.jpg'
import { Box } from "@mui/system";

import { ArrowBack , ArrowForward } from '@mui/icons-material'

export default function Hero() {

    const styles = {
        customBackground: {
            backgroundImage: `url(${building})`,
            backgroundPosition: "center",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 646,

            display: 'flex',
            justifyContent: 'center'
        }
    }

    return (
        <Stack>
            <Navbar />
            <Stack sx={styles.customBackground}>
                <Typography sx={{ marginLeft: 15, fontFamily: 'Work Sans', fontSize: 72, fontWeight: 600, color: '#292E3D', width: 560 }}>Building things is our mission.</Typography>
              
              
                <Stack border={1} width={416} height={190}>
                    <Box sx={{color : '#FFFFFF' ,backgroundColor : '#3559C7' ,padding : '20px 10px' , display : 'flex' ,flexDirection : 'column' ,alignItems : 'center' ,  gap :2, }}>
                        <Typography fontSize={20}>Featured projects</Typography>
                        <Typography fontSize={24}>Golden center , Chicago</Typography>
                    </Box>
                    {/* Rows */}
                    <Box sx={{display : 'flex' , flexDirection : 'row' , justifyContent :"space-around" , backgroundColor : 'blue'}}>
                      <Button startIcon={<ArrowBack/>}>Back</Button>
                      <Button startIcon={<ArrowForward/>}>Back</Button>
                        {/* 
                        <ArrowForward sx={{border : 'solid red 1px' , width : '40%' , fontSize : 30}}/> */}
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}