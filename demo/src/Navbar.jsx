import React from 'react'
import { Stack, Typography, Box, Link } from '@mui/material'
import logo from './images/logo.svg'

export default function Navbar() {


    return (
        <Stack direction='row' justifyContent='space-between' alignItems='center' height={80} >
            <Box sx={{display : "flex" , flexDirection : "row" , alignItems : "center" , gap : 1}}>
                <img style={{ width: 38, height: 47  }} src={logo} alt='fsdfs' />
                <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 600 , fontSize : 30 , color : '#2947A9'}}>TheBox</Typography>
            </Box>

            <Box sx={{display : "flex" , gap : 5 }}>
                {['Home' , 'About Us' , 'Project' , 'Services' , 'Contact Us'].map((item , index)=>(
                    <Link sx={{textDecoration : 'none' , color : 'black' , fontSize : 18}}>{item}</Link>
                ))}
            </Box>
        </Stack>
    )
}