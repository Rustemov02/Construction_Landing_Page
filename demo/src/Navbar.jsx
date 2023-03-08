import React, { useState } from 'react'
import { Stack, Typography, Box } from '@mui/material'
import logo from './images/logo.svg'
import './Navbar.css'

export default function Navbar() {

    const [active, setActive] = useState("home")
    const styles = {
        customBox: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1
        },
        typography: {
            fontFamily: 'Work Sans',
            fontWeight: 600,
            fontSize: 30,
            color: '#2947A9'
        }
    }
    return (
        <Stack direction='row' justifyContent='space-between' alignItems='center' height={80} px={15}>
            <Box sx={styles.customBox}>
                <img style={{ width: 38, height: 47 }} src={logo} alt='fsdfs' />
                <Typography sx={styles.typography}>TheBox</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 5 }}>
                {['Home', 'About Us', 'Project', 'Services', 'Contact Us'].map((item, index) => (
                    <li key={index} onClick={() => {
                        setActive(item.toLocaleLowerCase())
                    }} className={`navLink ${active == item.toLocaleLowerCase() && 'navActive'}`}>{item}</li>
                ))}
            </Box>
        </Stack>
    )
}