import * as React from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {  Grid, Switch } from "@material-ui/core";
import { GetStore } from "../../App";

const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.palette.background.default,
      color:theme.palette.text.primary,
      minHeight: '100vh',
    },
  }));

export interface MainTemplateProps  {
    readonly documentTitle?: string;
    readonly isLoading?: boolean;
    
  }
  
const MainTemplate: React.FC<MainTemplateProps>=(props)=>{
    const {children}=props;
   const store= React.useContext(GetStore);
  const classes = useStyles(props);
const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    if(store.changeTheme&&e.target.checked){
       store.changeTheme("dark");
    }else if(store.changeTheme&& !e.target.checked){
       store.changeTheme("light");
    }
    // console.log(e.target.checked)
};
  return(
      <>
      <div className={clsx(classes.root)}>
        <Grid container xs={12} justifyContent="center">
          <Grid item>
            <Switch   onChange={handleChange}/>
          </Grid>
        </Grid>
      <main>
          {children}
      </main>
      </div>
      </>
  );
};
export default MainTemplate;