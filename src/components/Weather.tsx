import React, { useState } from 'react';
import { TextField, Grid } from '@material-ui/core';
import useStyles from './Styles';

const Weather = () => {

    const styleClasses = useStyles();
    const [location, setLocation] = useState('');

    return (
        <Grid item className={styleClasses.weatherInput}>
            <TextField type="text"
                label="Enter location"
                value={location}
                variant="outlined"
                onChange={(e) => setLocation(e.target.value)}
            ></TextField>
        </Grid>
    )
}

export default Weather;