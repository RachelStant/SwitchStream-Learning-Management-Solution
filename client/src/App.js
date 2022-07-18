import { Button, styled, Typography, Fab, Box, Stack, Divider } from '@mui/material'
import { AccessibilitySharp, Add, AddCard, AddLocation }  from '@mui/icons-material'
import Leftbar from './components/Leftbar';
import Mainfeed from './components/Mainfeed';
import Navbar from './components/Navbar';

function App() {

  
  return (
    <div>
      <Box>
           <Navbar />
           <Stack direction='row' justifyContent='space-between'>
            <Leftbar />
            <Divider />
            <Mainfeed />
          </Stack>
      </Box>
    </div>
    
  );
}

export default App;
