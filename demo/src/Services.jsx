import React from 'react'
import { Stack, Typography, Box, Button } from '@mui/material'
import { MapsHomeWork, Bolt, Diversity2, Spa, Architecture, ElectricalServices } from '@mui/icons-material';

export default function Services() {

    const items = [
        {
            img: <MapsHomeWork sx={{ fontSize: 45 }} />,
            title: "Construction",
            bgColor: '#FFFFFF',
            color: '#2947A9'
        },
        {
            img: <Bolt sx={{ fontSize: 45 }} />,
            title: "Renovation",
            bgColor: '#2947A9',
            color: 'white'
        },
        {
            img: <Diversity2 sx={{ fontSize: 45 }} />,
            title: "Consulting",
            bgColor: '#FFFFFF',
            color: '#2947A9'
        },
        {
            img: <Spa sx={{ fontSize: 45 }} />,
            title: "Repair Services",
            bgColor: '#2947A9',
            color: 'white'
        },
        {
            img: <Architecture sx={{ fontSize: 45 }} />,
            title: "Architecture",
            bgColor: '#FFFFFF',
            color: '#2947A9'
        },
        {
            img: <ElectricalServices sx={{ fontSize: 45 }} />,
            title: "Electric",
            bgColor: '#2947A9',
            color: 'white'
        }

    ]

    const hr = (
        <Box
            component="span"
            sx={{ fontWeight: 900, color: '#E0E3EB' }}
        >
            ━━
        </Box>
    );

    const styles = {
        customBox: {
            borderRadius: 2,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            width: 300,
            height: 180
        }
    }

    return (
        <Stack bgcolor='#d1ebde' py={3} >
            <Typography sx={{ fontFamily: "Work Sans", fontSize: 36, alignSelf: 'center' }} data-aos="fade-up">Services</Typography>

            <Stack direction='row' justifyContent='center' flexWrap='wrap' gap={5} py={7}>
                {items.map((item, index) => (
                    <Box key={index} sx={styles.customBox} style={{ backgroundColor: `${item.bgColor}` }} data-aos="fade-up">
                        <Box sx={{ color: `${item.color}` }}>
                            {item.img}
                        </Box>
                        {hr}
                        <Typography sx={{ fontSize: 20, color: `${item.color}`, fontFamily: 'Work Sans', fontWeight: 600 }}>{item.title}</Typography>
                    </Box>
                ))}
            </Stack>


        </Stack>
    )
}