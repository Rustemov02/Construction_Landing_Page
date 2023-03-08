import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import Navbar from "./Navbar";
import building from './images/building.jpg'
import { Box } from "@mui/system";

import { ArrowBack, ArrowForward } from '@mui/icons-material'

export default function Hero() {

    const styles = {
        customBackground: {
            backgroundImage: `url(${building})`,
            backgroundPosition: "center",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 646,

            display: 'flex',
            justifyContent: 'center',
            position: 'relative'
        },
        typography: {
            marginLeft: 15,
            fontFamily: 'Work Sans',
            fontSize: 72,
            fontWeight: 600,
            color: '#292E3D',
            width: 560
        },
        customBox: {
            color: '#FFFFFF',
            backgroundColor: '#3559C7',
            padding: '20px 10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
        }
    }

    return (
        <Stack>
            <Navbar />
            <Stack sx={styles.customBackground}>
                <Typography sx={styles.typography}>Building things is our mission.</Typography>
                <Stack border={1} width={416} sx={{ position: 'absolute', top: '75.3%', left: '72.1%' }}>
                    <Box sx={styles.customBox}>
                        <Typography fontSize={20}>Featured projects</Typography>    
                        <Typography fontSize={24}>Golden center , Chicago</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'blue' }}>
                        <Box sx={{ color: '#fff', backgroundColor: 'black', width: '50%', display: 'flex', justifyContent: 'center', borderRight: 'solid white 0.5px' }}>
                            <Button startIcon={<ArrowBack />} sx={{ color: '#fff' }}>Back</Button>
                        </Box>

                        <Box sx={{ color: '#fff', backgroundColor: 'black', width: '50%', display: 'flex', justifyContent: 'center', borderLeft: 'solid white 0.5px' }}>
                            <Button startIcon={<ArrowForward />} sx={{ color: '#fff' }} >Next</Button>
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}