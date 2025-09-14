import {Box} from '@mui/material'
import Navbar from './Navbar'
import Hero from './Hero'

const NewChat = () => {
  return (
    <div>
       <Box sx={{ height: '100vh', width: '75vw' }} id='NewChat'>
        <Navbar/>
        <Hero/>
       </Box>
    </div>
  )
}

export default NewChat
