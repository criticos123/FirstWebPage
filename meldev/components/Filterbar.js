import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function Filterbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

   
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Bedrooms</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name="one" />}
            label="one"
          />
          <FormControlLabel
            control={<Checkbox  name="two" />}
            label="two"
          />
          <FormControlLabel
            control={<Checkbox  name="three" />}
            label="three"
          />
            <FormControlLabel
            control={<Checkbox  name="four" />}
            label="four"
          />
             <FormControlLabel
            control={<Checkbox  name="five" />}
            label="five"
          />
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Bathrooms</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name="one" />}
            label="one"
          />
          <FormControlLabel
            control={<Checkbox  name="two" />}
            label="two"
          />
          <FormControlLabel
            control={<Checkbox  name="three" />}
            label="three"
          />
            <FormControlLabel
            control={<Checkbox  name="four" />}
            label="four"
          />
             <FormControlLabel
            control={<Checkbox  name="five" />}
            label="five"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}