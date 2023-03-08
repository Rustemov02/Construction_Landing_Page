import React from 'react'
import { Stack, Typography, Box, TextField, Button } from '@mui/material'
import logo from './images/logo.svg'

import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';


export default function Bottom() {
 
    const styles = {
        customIcon: {
            fontSize: 30,
            color: '#3D445C',
            marginRight: 2,
            '&:hover': {
                color: 'black',
                cursor: 'pointer',
                transition: '0.5s'
            }
        }
    }
    const data = [
        {
            title: 'ADDRESS :',
            text: '6391 Elgin St. Celina, Delaware 10299'
        },
        {
            title: 'PHONE :',
            text: '+84 1102 2703'
        },
        {
            title: 'EMAIL :',
            text: 'bunyamin2002@mail.ru'
        }
    ]

    return (
        <Stack direction='row' justifyContent='space-around' py={10}>
            <Stack direction='column' spacing={2}>
                {data.map((item, index) => (
                    <Box key={index} sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                        <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: 'Work Sans', color: '#2947A9' }}> {item.title}</Typography>
                        <Typography >{item.text}</Typography>
                    </Box>
                ))}


                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1 }}>
                    <img style={{ width: 38, height: 47 }} src={logo} alt='fsdfs' />
                    <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 600, fontSize: 30, color: '#2947A9' }}>TheBox</Typography>
                </Box>
            </Stack>    


            <Stack direction='column' spacing={3}>

                <Stack direction='column' spacing={2}>
                    <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: 'Work Sans', color: '#2947A9' }}> NEWSLETTER  : </Typography>
                    <Box  >
                        <TextField size='small' label="Your email here" variant="outlined" />
                        <Button onClick={()=>alert('Your @mail was sent ! Thank You :) ')} variant='contained' sx={{ bgcolor: '#F9995D', marginLeft: 1, width: 136, height: 41 }}>Subscribe</Button>
                    </Box>
                </Stack>

                <Stack>
                    <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: 'Work Sans', color: '#2947A9' }}> SOCIAL : </Typography>
                    <Box>
                        <Facebook sx={styles.customIcon} />
                        <LinkedIn sx={styles.customIcon} />
                        <Twitter sx={styles.customIcon} />
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}