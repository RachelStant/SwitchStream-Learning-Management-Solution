import { deepPurple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";


let theme = createTheme({
    palette: {
       primary: {
           main: '#1976d2'
       },
       secondary: {
           main: '#81d4fa',
       },
       brandColor: {
           main: '#757575',
       }
    }
})


export default theme;