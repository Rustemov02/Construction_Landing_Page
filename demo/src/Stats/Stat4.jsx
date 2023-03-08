import React from "react";
import { Stack, Typography, Card } from "@mui/material";
import img from '../images/4.svg'

export default function Stat4() {

    const styles = {
        customSvg: {
            position : 'absolute' ,
            left : 250, 
            top : 130,
            width: 97,
            height: 97
        }
    }

    return (
        <Stack width={280} sx={{position : 'relative'}} marginLeft={15} marginTop={12} data-aos="fade-up">
            <Card elevation={5} sx={{ width: 280, py: 3, px: 2 }}>
                <Typography sx={{ fontSize: 72 }}>30</Typography>
                <Typography sx={{ borderLeft: 'solid #F9995D 4px', fontSize: 24, px: 1 }}>Years in Business</Typography>
            </Card>

            <img style={styles.customSvg} src={img} />
        </Stack>
    )
}