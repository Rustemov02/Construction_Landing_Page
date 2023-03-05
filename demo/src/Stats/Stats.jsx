import React from 'react'
import { Stack } from '@mui/material'
import Stat1 from './Stat1'
import Stat2 from './Stat2'
import Stat3 from './Stat3'
import Stat4 from './Stat4'
import Title from './Title'



export default function Stats() {


    return (
        <Stack border={1} direction='row' justifyContent='center' py={10} px={10} spacing={15}>

            <Stack width='50%' direction='row' flexWrap='wrap' >
                <Stat2 />
                <Stat1 />
                <Stat4 />
                <Stat3 />
            </Stack>


            <Title />
        </Stack>
    )
}