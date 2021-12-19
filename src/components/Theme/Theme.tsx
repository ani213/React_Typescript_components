import * as React from 'react';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import { createTheme, responsiveFontSizes,ThemeProvider} from '@material-ui/core/styles';
import { GetStore } from '../../App';
const Theme: React.FC<any> =(props)=>{
const store=React.useContext(GetStore);
    const{children}=props;
    const theme = responsiveFontSizes(createTheme({
        palette: {
          primary: {
            main: purple[500],
          },
          secondary: {
            main: green[500],
          },
          type:store.theme,
          
        },
      }));
    return(
        <>
         <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>  
        </>
    );
};
export default Theme;
