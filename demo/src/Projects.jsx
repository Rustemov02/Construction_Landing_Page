import React, { useState } from "react";
import { Link, Stack, Typography, Box, Card, CardMedia, CardContent } from "@mui/material";
import img1 from './images/filter1.jpg'
import img2 from './images/filter2.jpg'
import img3 from './images/filter3.jpg'
import img4 from './images/filter4.jpg'
import commer1 from './images/commer1.jpg'
import commer2 from './images/commer2.jpg'
import commer3 from './images/commer3.jpg'
import commer4 from './images/commer4.jpg'
import resi1 from './images/resi1.jpg'
import resi2 from './images/resi2.jpg'
import resi3 from './images/resi3.jpg'
import resi4 from './images/resi4.jpg'
import other1 from './images/other1.jpg'
import other2 from './images/other2.jpg'
import other3 from './images/other3.jpg'
import other4 from './images/other4.jpg'

export default function Projects() {

    const [project, setProject] = useState('all')

    const data = 
        [
            {
                type: 'all',
                img: img1,
                title: 'Wildstone Infra Hotel',
                location: '2715 Ash Dr. San Jose, South Dakota'
            },
            {
                type: 'all',
                img: img2,
                title: 'Wish Stone Building',
                location: '2972 Westheimer Rd. Santa Ana, Illinois '
            },
            {
                type: 'all',
                img: img3,
                title: 'Mr. Parkinston\'s House',
                location: '3517 W. Gray St. Utica, Pennsylvania'
            },
            {
                type: 'all',
                img: img4,
                title: 'Oregano Height',
                location: '2464 Royal Ln. Mesa, New Jersey '
            },
            {
                type: 'commercial',
                img: commer1,
                title: 'Praesent maximus orci',
                location: '2972 Westheimer Rd. Santa Ana, Illinois'
            },
            {
                type: 'commercial',
                img: commer2,
                title: 'Praesent maximus orci',
                location: '2972 Westheimer Rd. Santa Ana, Illinois'
            },
            {
                type: 'commercial',
                img: commer3,
                title: 'Praesent maximus orci',
                location: '2972 Westheimer Rd. Santa Ana, Illinois'
            },
            {
                type: 'commercial',
                img: commer4,
                title: 'Praesent maximus orci',
                location: '2972 Westheimer Rd. Santa Ana, Illinois'
            },
            {
                type: "residental",
                img: resi1,
                title: 'Praesent maximus orci',
                location: '2972 Westheimer Rd. Santa Ana, Illinois'
            },
            {
                type: "residental",
                img: resi2,
                title: 'Praesent maximus orci',
                location: '2972 Westheimer Rd. Santa Ana, Illinois'
            },
            {
                type: "residental",
                img: resi3,
                title: 'Praesent maximus orci',
                location: '2972 Westheimer Rd. Santa Ana, Illinois'
            },
            {
                type: "residental",
                img: resi4,
                title: 'Praesent maximus orci',
                location: '2972 Westheimer Rd. Santa Ana, Illinois'
            },
            {
                type: 'other',
                img: other1,
                title: 'Praesent maximus orci',
                location: '2972 Westheimer Rd. Santa Ana, Illinois'
            },
            {
                type: 'other',
                img: other2,
                title: 'Praesent maximus orci',
                location: '2972 Westheimer Rd. Santa Ana, Illinois'
            },
            {
                type: 'other',
                img: other3,
                title: 'Praesent maximus orci',
                location: '2972 Westheimer Rd. Santa Ana, Illinois'
            },
            {
                type: 'other',
                img: other4,
                title: 'Praesent maximus orci',
                location: '2972 Westheimer Rd. Santa Ana, Illinois'
            }
        ]
    

    const styles = {
        customLink: {

            textDecoration: 'none',
            color: '#C2C7D6',
            fontSize: 24,
            paddingLeft: 3,
            borderLeft: "solid 5px #FFFFFF",
            '&:hover': {
                cursor: 'pointer',
                color: '#2947A9',
                borderLeft: "solid 5px #2947A9",
                transition: '0.5s'

            }
        }
    }

    return (
        <Stack direction="row" py={10} alignItems='flex-start' justifyContent='center'>


            <Stack width='50%'>
                <Typography sx={{ color: '#292E3D', fontSize: 36, fontFamily: 'Work Sans', fontWeight: 700 }}>Projects</Typography>


                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, py: 4 }}>
                    {['All', 'Commercial', 'Residental', 'Other'].map((item, index) => (
                        <Link onClick={()=>setProject(item.toLocaleLowerCase())} sx={styles.customLink} key={index}>{item}</Link>
                    ))}
                </Box>
            </Stack>


            <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={4}>
                {data.filter(item => item.type === `${project}`).map((item, index) => (
                    <Card key={index} sx={{ width: 384 }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={item.img}
                        />

                        <CardContent sx={{ backgroundColor: '#2947A9', display: 'flex', flexDirection: 'column', alignItems: "flex-start", gap: 1 }}>
                            <Typography variant="h5" component="div" sx={{ fontFamily: 'Work Sans', fontSize: 20, fontWeight: 700, color: "#FFFFFF" }}>{item.title}</Typography>


                            <Typography sx={{ fontFamily: 'Work Sans', fontSize: 18, fontWeight: 400, color: "#FFFFFF" }} color="text.secondary">
                                {item.location}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Stack>
    )
}


