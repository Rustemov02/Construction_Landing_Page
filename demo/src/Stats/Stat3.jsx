import React from "react";
import { Stack, Typography, Card } from "@mui/material";
import thirdImg from '../images/3.svg'

export default function Stat3() {

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
        <Stack width={280} sx={{position : 'relative'}} marginLeft={-7} marginTop={-3}>
            <Card elevation={5} sx={{ width: 280, py: 3, px: 2 }}>
                <Typography sx={{ fontSize: 72 }}>34</Typography>
                <Typography sx={{ borderLeft: 'solid #F9995D 4px', fontSize: 24, px: 1 }}>Awards Win</Typography>
            </Card>

            <img style={styles.customSvg} src={thirdImg} />
        </Stack>
    )
}