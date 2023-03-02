import React from 'react'
import { Stack, Box, Typography, Button } from '@mui/material'
import man from '../images/man.jpg'


export default function Info() {
    const styles = {
        customBox : {
            width: 400,
            height: 430,
            backgroundColor: '#2947A9',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            padding: '0 30px',
            position : 'absolute' ,
            left : "50%",
            top : '15%'
        }
    }
    return (
        <Stack sx={{position: 'relative'}} alignItems='flex-start' px={7}  py={7}>
            <img style={{ width: 800, height: 550 }} src={man} />

            <Box sx={styles.customBox}>
                <Typography sx={{ fontSize: 36, color: '#FFFFFF' }}> About Us</Typography>
                <Typography sx={{ fontSize: 20, color: '#FFFFFF' }}>
                    For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.  We've matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.
                </Typography>
                <Button sx={{ alignSelf: 'flex-start' , backgroundColor : '#fff' , color : "#2947A9 " }} variant='contained'>More on Our History</Button>
            </Box>
        </Stack >
    )
}