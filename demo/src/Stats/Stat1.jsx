import React from "react";
import { Stack, Typography, Card } from "@mui/material";
import firstSvg from '../images/1.svg'

export default function Stat1() {

    const styles = {
        customSvg: {
            position : 'absolute' ,
            left : 250, 
            top : -10,
            width: 97,
            height: 97
        }
    }

    return (
        <Stack width={280} sx={{position : 'relative'}} >
            <Card elevation={5} sx={{ width: 280, py: 3, px: 2 }}>
                <Typography sx={{ fontSize: 72 }}>84</Typography>
                <Typography sx={{ borderLeft: 'solid #F9995D 4px', fontSize: 24, px: 1 }}>Happy Clients</Typography>
            </Card>

            <img style={styles.customSvg} src={firstSvg} />
        </Stack>
    )
}