import React, { useState } from 'react';
import { TextField, Grid, Card, CardMedia, Typography, Button, Paper, CssBaseline } from '@material-ui/core';
import useStyles from './Styles';
import { fetchWeather } from '../api/Weather';
import WeatherModel from '../model/Weather';
import './Weather.css';

const Weather = () => {

    const styleClasses = useStyles();
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState(new WeatherModel());

    const searchWeather = async (e: any) => {
        e.preventDefault();
        console.log('Searching for ' + location);
        const weatherResponse = await fetchWeather(location);
        console.log(weatherResponse)
        setWeather(weatherResponse);
    }

    return (
        <Paper>
            <CssBaseline />
                <form onSubmit={searchWeather}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <TextField type="text"
                                label="Enter location"
                                value={location}
                                variant="outlined"
                                onChange={(e) => setLocation(e.target.value)}
                            ></TextField>

                        </Grid>
                        <Grid item>
                            <Button variant="contained" type="submit">Search</Button>
                        </Grid>
                    </Grid>
                </form>
                <Grid container >

                    <Card variant='outlined'>
                        <Typography>{weather.name}</Typography>
                        <Typography>{weather.main?.temp}</Typography>
                    </Card>
                </Grid>
        </Paper>
    )
}

export default Weather;