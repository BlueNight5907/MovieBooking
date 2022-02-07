
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import BlogCardI from '../../../components/BlogCardI'
import NormalTitle from '../../../components/NormalTitle/NormalTitle'
import { trendingStoies } from '../../../mockData/movies'
const useStyles = ()=>({
    root:{
        padding:'20px 0',
        background:'#fff'
    },
    title:{
        color:'rgba(0, 0, 0, 0.87)',
        fontWeight:600,
        '&::after':{
            border:'1px solid rgba(0,0,0,0.3)',
        }
    }
})

function TrendingStory() {
    const classes = useStyles()
    return (
        <section className='trendingStory'>
            <Box sx={classes.root}>
                <NormalTitle sx={classes.title}>
                    Bài viết liên quan
                </NormalTitle>
                <Grid container spacing={1} style={{paddingTop:20}}>
                    {
                        trendingStoies.map((e,i)=>(
                            <Grid item key={i} xs={12} sm={6} lg={4}>
                                <BlogCardI data={e} key={i}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </section>
    )
}

export default TrendingStory
