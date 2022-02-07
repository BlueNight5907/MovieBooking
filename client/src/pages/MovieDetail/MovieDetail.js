
import { Container, Grid } from '@mui/material'
import React from 'react'
import MainTitle from '../../components/MainTitle'
import MainMovie from './MainMovie'
import MoreInfor from './MoreInfor'
import MovieInfor from './MovieInfor'
import TrendingStory from './TrendingStory'
const useStyles = ()=>({
    mobileChange:{
        display:'flex',
        flexDirection:{xs:'column-reverse',lg:'column'},
    },
    botWrapper:{
        backgroundColor:'#fff'
    }
})
function MovieDetail() {
    const classes = useStyles()
    return (
        <div className='movie-detail'>
            <MainTitle/>
            <MainMovie/>
            <Container sx={classes.botWrapper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9} sx={classes.mobileChange}>
                        <TrendingStory/>
                        <MovieInfor/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <MoreInfor/>
                    </Grid>
                </Grid>    
            </Container>
        </div>
    )
}

export default MovieDetail
