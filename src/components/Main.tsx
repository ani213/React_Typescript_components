import { Paper, Typography } from "@material-ui/core";
import * as React from "react";
import MainTemplate from "./MainTemplate/MainTemplate";
import Text from "./Text/Text";

export interface MainProps  {
    readonly documentTitle?: string;
    readonly isLoading?: boolean;
    
  }
  
const Main: React.FC<MainProps>=(props)=>{
    const {children}=props;
  return(
      <>      
        <MainTemplate>
           <Text >Hello</Text>
           <Typography variant="h3">Theme</Typography>
       </MainTemplate>
      </>
  );
};
export default Main;