import React from 'react'
import { Stack } from '@mui/material'
import Hero from './Hero'
import Navbar from './Navbar'
import About from './Info/About'
import Services from './Services'

export default function App(){


  return(
    <Stack px={10}>
      <Hero/>
      <About/>
      <Services/>
    </Stack>
  )
}