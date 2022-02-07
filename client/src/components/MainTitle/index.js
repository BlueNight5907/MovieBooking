
import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Navigation from './Navigation'
const useStyles = ()=>({
    root:{
        background: 'url("/assets/images/background/main_title.jpg") 50% 0 repeat-y',
        backgroundSize:'cover',
    },
    wrapper:{
        paddingTop:75+'px',
        background:'rgba(0,0,0,0.7)',
        color:'#fff'
    },
    title:{
        textTransform:'uppercase',
        color:'inherit',
        fontSize:36,
        fontWeight:600
    }
})
function MainTitle() {
    const classes = useStyles()
    return (
        <Paper elevation={0} square sx={classes.root}>
            <Paper sx={classes.wrapper}>
                <Container>
                    <Grid container direction='column' alignItems='center'>
                        <Grid item>
                            <Typography component='h1'
                            sx={classes.title}>
                                boku no pico
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Navigation/>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </Paper>
        
    )
}

export default MainTitle
