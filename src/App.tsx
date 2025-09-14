import { Container} from '@mui/material'
import SideBar from './components/SideBar'
import NewChat from './components/NewChat'



function App() {
  return (
    <>
        <Container disableGutters maxWidth="xl"  sx={{ bgcolor: '#ffffffff', height: '100vh', width: '100vw',display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <SideBar/>
          <NewChat/>
        </Container>

    </>
  )
}

export default App
