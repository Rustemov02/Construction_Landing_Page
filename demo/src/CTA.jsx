import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Form from "./Form";


export default function CTA() {


    return (
        <Stack backgroundColor="#cae3d6" py={10}>
            <Box sx={{display : 'flex' ,flexDirection : 'column' ,alignItems : 'center'}}>
                <Typography sx={{ color: '#292E3D', fontSize: 36, fontWeight: 700 }}>What can us do for you?</Typography>
                <Typography sx={{ width : 540 , textAlign : "center" , color: '#292E3D', fontSize: 20, fontFamily: 'Work Sans', fontWeight: 400 }}>We are ready to work on a project of any complexity, whether it’s commercial or residential.</Typography>
            </Box>
        
            <Form/>
        </Stack>
    )
}