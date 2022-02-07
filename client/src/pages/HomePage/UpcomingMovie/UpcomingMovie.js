import React from 'react'

import SectionTitle from '../../../components/SectionTitle'
import MovieTabPanel from './MovieTabPanel';
import { moviesTabs } from '../../../mockData/movies';
import { Container, Grid, Paper, Tab, Tabs, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';

const useStyles = ()=>({
    wrapper:{
        backgroundColor:'inherit'
    },
    movieTabs:{
        
        "& button": {
            textTransform:'capitalize',
            backgroundColor:'#fff',
            fontSize:12,
            height:48,
            fontWeight:400,
            padding: '0 20px', // the size of the border
            transition:'all 0.3s ease-in-out',
            position:'relative'
        },
        "& button:first-of-type": {
            borderRadius:'5px 0 0 5px'
        },
        "& button:last-child": {
            borderRadius:'0 5px 5px 0'
        },
        "& button:hover": {
            color:'#fff',
            backgroundColor:theme => theme.main.color,
            overflow:'visible',
            opacity:1,
            '&:not(:last-child)::before':{
                content:"''",
                width:'2px',
                height:'70%',
                position:'absolute',
                right:'-1px',
                backgroundColor:'#fff',
                zIndex:10
            },
            '&:not(:first-of-type)::after':{
                content:"''",
                width:'2px',
                height:'70%',
                position:'absolute',
                left:'-1px',
                backgroundColor:'#fff',
                zIndex:10
            }
            
        },
        "& button[aria-selected='true']": {
            backgroundColor:theme => theme.main.color,
            color:'#fff'
        }
    }
})
function a11yProps(index) {
    return {
      id: `movie-showtime-wrapped-tab-${index}`,
      'aria-controls': `movie-showtime-tabpanel-${index}`,
    };
  }

const Wrapper = styled('section')(({theme})=>({
    padding:'94px 0',
    backgroundColor:theme.main.background
}))

function UpcomingMovie() {
    const [seletedTab, setSeletedTab] = React.useState(0);
    const matches = useMediaQuery('(max-width:380px)');
    //style material UI
    const classes = useStyles()

    const handleChange = (event, newValue) => {
        setSeletedTab(newValue);
    };
    
    const activeScrollTabs = () =>{
        if(matches) return {
            variant:"scrollable",
            'aria-label':"scrollable force tabs example"
        }
        return {
            centered:true
        }
    }

    return (
        <Wrapper className='upcoming-movies' >
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <SectionTitle>
                            upcoming movies
                        </SectionTitle>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={0} sx={classes.wrapper}>
                            <Tabs value={seletedTab}
                                onChange={handleChange}
                                
                                {...activeScrollTabs()}
                                TabIndicatorProps={{sx:{display:'none'}}}
                                sx={classes.movieTabs}
                            >
                                <Tab label="Phim đang chiếu" {...a11yProps(0)}/>
                                <Tab label="Phim sắp chiếu" {...a11yProps(1)}/>
                                <Tab label="Phim hot" {...a11yProps(3)}/>
                            </Tabs>
                        </Paper>
                        <MovieTabPanel value={seletedTab} data={moviesTabs} index={0}/>
                        <MovieTabPanel value={seletedTab} index={1}/>
                        <MovieTabPanel value={seletedTab} index={2}/>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default UpcomingMovie
