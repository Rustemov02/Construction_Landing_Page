import React from 'react'
import { Stack , Typography} from '@mui/material'


export default function Services() {

    const items = [
        {
            img : '' ,
            title : "Construction"
        },
        {
            img : '' ,
            title : "Renovation"
        },
        {
            img : '' ,
            title : "Consulting"
        },
        {
            img : '' ,
            title : "Repair Services"
        },
        {
            img : '' ,
            title : "Architecture"
        },
        {
            img : '' ,
            title : "Electric"
        }

    ]


    return (
        <Stack>
            <Typography sx={{ fontFamily: "Work Sans", fontSize: 36, alignSelf: 'center' }}>Services</Typography>
        </Stack>
    )
}