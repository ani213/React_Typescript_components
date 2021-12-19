import * as React from 'react';
// import clsx from 'clsx';
import {  Typography,  } from '@material-ui/core';


export interface TextProps{
  readonly component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
}


const Text: React.FC<TextProps> = (props) => {
  const {  children, ...rest } = (props);
  return (
    <Typography   {...rest}>
      { children}
    </Typography>
  );
};


export default Text;