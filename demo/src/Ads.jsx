import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import kitchen from './images/kitchen-1.jpg'

export default function Ads() {
    const amount = 10

    const styles = {
        backCover: {
            backgroundImage: `url(${kitchen})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',      
        }
    }

    return (
        <Stack height={300} direction='row' alignItems='center' justifyContent="space-around" sx={styles.backCover}>

            <Box sx={{ color: '#FFFFFF' }}>
                <Typography sx={{ fontSize: 36, fontWeight: 700, fontFamily: 'Work Sans' }}>Free consultation with exceptional quality</Typography>
                <Typography sx={{ fontSize: 24, fontFamily: 'Work Sans' }}>Just one call away:  <Typography component='span' sx={{ textDecoration: "underline" }}>+84 1102 2703</Typography></Typography>
            </Box>

            <Button variant='outlined' sx={{ border: 'solid 2px white', color: '#FFFFFF' }}>Get your consultation</Button>
        </Stack>
    )
}