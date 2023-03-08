import React from "react";
import { Stack, Box, Typography, Card } from "@mui/material";
import secondSvg from '../images/2.svg'

export default function Stat2() {

    const styles = {
        customSvg: {
            position : 'absolute' ,
            left : -40, 
            top : -40,
            width: 97,
            height: 97
        }
    }

    return (
        <Stack width={280} sx={{position : 'relative'}} marginTop={10} marginLeft={10} data-aos="fade-up">
            <Card elevation={5} sx={{ width: 280, py: 3, px: 2 }}>
                <Typography sx={{ fontSize: 72 }}>123</Typography>
                <Typography sx={{ borderLeft: 'solid #F9995D 4px', fontSize: 24, px: 1 }}>Projects Completed</Typography>
            </Card>

            <img style={styles.customSvg} src={secondSvg} />
        </Stack>
    )
}