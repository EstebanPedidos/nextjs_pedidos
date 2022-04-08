import { createMuiTheme } from '@material-ui/core/styles'; 

export default createMuiTheme ({
    palette:{
        common: {
           blue: '#3655a5',
           orange:"#f1861c",
           white: '#ffffff',
           lightgray: '#CCCCCC',
           lightgrayb: '#E7ECF3',
        },
        primary:{
            light: '#99B2F2',
            main: '#3655a5',
            dark: '#002d75',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffb750',
            main: '#f1861c',
            dark: '#a85d13',
            contrastText: '#000',
          },
          error: {
          light:'#e57373',
          main: '#f44336',
          dark: '#d32f2f',
          contrastText: '#fff',
        },
        white: {
            main:  '#FFFFFF',
          },
        background: {
            paper :'#ffffff',
            default:'#ffffff',
            blue: '#3655a5',

        },
    },
    typography: {
        fontFamily: 'Poppins ,sans-serif',
        h1:  {
        fontWeight: "600",
        fontSize: '2rem',
        },
        h2:  {
          fontWeight: "600",
          fontSize: '1.5rem',
         
          },
        h3:  {
          fontWeight: "600",
          
          },
        button: {
          textTransform: 'none',
          height: '50px',
        }
      },

});