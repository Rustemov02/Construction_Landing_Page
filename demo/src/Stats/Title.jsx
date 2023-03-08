import React from 'react'
import { Button, Stack, Typography , Box} from '@mui/material'


export default function Title() {


    return (
        <Stack width='40%'   margin='auto' justifyContent='center' alignItems='center' data-aos="fade-left"> 
            <Stack direction='column' alignItems='flex-start' width={360} spacing={5}>
                <Typography sx={{ color: '#2947A9', fontSize: '60px', fontFamily: 'Work Sans', fontWeight: 600 }}>30 Years Experience</Typography>
                <Typography sx={{ color: '#525B7A', fontSize: '20px' }}>Our company has been the leading provided construction services to clients throughout the USA since 1988.</Typography>
                <Button variant='contained' sx={{width : 176 , height : 53 , backgroundColor : '#2947A9'}}>Contact Us</Button>
            </Stack>
        </Stack>
    )
}