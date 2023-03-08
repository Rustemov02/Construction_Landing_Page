import React from "react";
import { Stack, Box, Typography } from '@mui/material'
import { HeadsetMic, SupportAgent, DesignServices } from '@mui/icons-material';



export default function AboutBox() {

    const iconStyle = {
        fontSize: 40,
        color: '#F9995D'
    }


    const items = [
        {
            icon: <SupportAgent sx={iconStyle} />,
            title: 'Best Services',
            text: 'Nullam senectus porttitor in eget. Eget rutrum leo interdum.'
        },
        {
            icon: <HeadsetMic sx={iconStyle} />,
            title: "Best Teams",
            text: 'Cursus semper tellus volutpat aliquet lacus. '
        },
        {
            icon: <DesignServices sx={iconStyle} />,
            title: 'Best Design',
            text: 'Ultricies at ipsum nunc, tristique nam lectus.'
        }
    ]

    return (
        <Stack direction='column' justifyContent='center' gap={5} py={6} data-aos="fade-up">
            <Typography sx={{ fontFamily: "Work Sans", fontSize: 36, alignSelf: 'center' }}>Our Reputation</Typography>
            <Box sx={{display : 'flex' , flexDirection : 'row' ,gap : 5, py : 6 ,  justifyContent : 'center'}}>
            {items.map((item, index) => ( 
                <Box key={index} sx={{ border: 'solid #E0E3EB 1.4px', width: 292, padding: '20px 20px 40px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {item.icon}
                    <Typography sx={{ fontSize: 20, color: '#3D445C' }}>{item.title}</Typography>
                    <Typography sx={{ fontSize: 16, color: '#858EAD' }}>{item.text}</Typography>
                </Box>
            ))}
            </Box>
        </Stack>
    )
}