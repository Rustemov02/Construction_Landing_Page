import React from "react";
import { Stack, TextField, Box, Button } from "@mui/material";


export default function Form() {

    const [name, setName] = React.useState('')
    const styles = {
        customField: {
            width: '280px',
            margin: 1,
            my: 1,
            backgroundColor: '#FFFFFF'
        },
        customButton: {
            bgcolor: '#2947A9',
            width: 271,
            height: 53,
            fontSize: 18,
            color: '#FFFFFF',
            "&:hover": {
                color: '#2947A9',
                bgcolor: '#FFFFFF',
                border: 'solid 1px #2947A9',
                transition: '1s'
            }
        }
    }

    return (
        <Stack direction='row'
            width={600}
            margin='auto'
            justifyContent='center'
            bgcolor='transparent'
            flexWrap='wrap'
            px={3} py={2}>

            <TextField
                onChange={(e) => {
                    setName(e.target.value)
                    console.log(name)
                }}
                sx={styles.customField}
                size="small"
                label="Your Name *"
                type="text"
            />
            <TextField
                sx={styles.customField}
                size="small"
                label="Email *"
                type="email"
            />
            <TextField
                sx={styles.customField}
                size="small"
                label="Reason for Contacting *"
                type="text"
            />
            <TextField
                sx={styles.customField}
                size="small"
                label="Phone"
                type="number"
            />

            <Box sx={{ width: '95%' }}>
                <TextField
                    sx={{ width: '100%', marginBottom: 2, backgroundColor: '#FFFFFF' }}
                    label="Message"
                    multiline
                    rows={4}
                />
            </Box>
            <Button sx={styles.customButton} onClick={() => alert(` ${name} , Your message was sent  !`)}>Submit</Button>
        </Stack>
    )
}