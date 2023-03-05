import React from 'react'
import { Stack, Typography } from '@mui/material'


export default function Footer() {
    return (
        <Stack bgcolor='#2947A9' height={70} direction='row' alignItems='center' >
            <Typography sx={{ color: '#FFFFFF', marginLeft: 23 }}>TheBox Company © 2022. All Rights Reserved</Typography>
        </Stack>
    )
}