import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  
}));

type cardprops={
  alignContent?:string;
  alignItems?:string;
  className?:string;
  classes?:	object;
  component?: Element;
  container?:	boolean;
  direction?:string;
  item?:boolean;
  justify?:string;
  wrap?:string;
  spacing?:number;
  xl?:boolean|string|number;
  xs?:boolean|string|number;
  md?:boolean|string|number;
  lg?:boolean|string|number;
  sm?:boolean|string|number;
  zeroMinWidth?:	boolean;
  children?: React.ReactNode
  data?:any
  titlestyles?:any
  subtitle?:any
  contentdata?:any
}

const GetCard=(props:cardprops)=> {

  const output:any=[];

  const classes = useStyles();
  
  Array.isArray(props.data) && props.data.forEach(element=> {
    console.log(element.title)
 

  output.push(
    
    <div >
      <div>
  <p style={props.titlestyles}>{element.title}</p>
  <p style={props.subtitle}>{element.subtitle}</p>
     </div>
     <div className={classes.root}>
      <Grid container spacing={3}>

      <Grid item xs>
      <Paper className={classes.paper}>
      <h1>01.</h1>
          <h3>Optimize Processing</h3>
          <p>Simplify and automate student registration and certification.</p>
      </Paper>
          
        </Grid>
        <Grid item xs>
        <Paper className={classes.paper}>
          <h1>02.</h1>
          <h3>Optimize Processing</h3>
          <p>Simplify and automate student registration and certification.</p>
        </Paper>
        </Grid>
        <Grid item xs>
        <Paper className={classes.paper}>
          <h1>03.</h1>
          <h3>Optimize Processing</h3>
          <p>Simplify and automate student registration and certification.</p>
        </Paper>
        </Grid>
        <Grid item xs>
        <Paper className={classes.paper}>
          <h1>04.</h1>
          <h3>Optimize Processing</h3>
          <p>Simplify and automate student registration and certification.</p>
         </Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  );

});
return output
}

export default GetCard;
