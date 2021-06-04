import React from 'react';

import CssBaseline from '../../public/node_modules/@material-ui/core/CssBaseline';
import { makeStyles } from '../../public/node_modules/@material-ui/core/styles';
import Grid from '../../public/node_modules/@material-ui/core/Grid';
import Typography from '../../public/node_modules/@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  bigbody: {
    marginTop: theme.spacing(8),
  },

  Wrapper: {
    border:"1px solid #ffff",
  },
}));




export default function Sidebar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <main className={classes.bigbody}>
          <Grid container spacing={4}>
          <Typography variant="h6" align="left" color="textSecondary">
             Filters
        </Typography>
        <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Bedrooms</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="one" />}
            label="One"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="two" />}
            label="Two"
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="two" />}
            label="Three"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>

          </Grid>
        </main>
    </React.Fragment>
  );
}



