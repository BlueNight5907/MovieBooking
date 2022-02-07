import { ModeCommentOutlined, ThumbUpOutlined } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import CommonLink from '../../../../components/CommonLink'
const useStyles = ()=>({
    root:{
        width:'100%',
        flex:1,
        cursor:'pointer',
        position:'relative'
    },
    img:{
        paddingTop:200+'px',
        paddingBottom:200+'px',
    },
    content:{
        position:'absolute',
        bottom:0,
        left:0,
        width:'100%',
        color:'#fff',
        zIndex:3,
        '& hr': {
            margin:theme => theme.spacing(0, 1),
            backgroundColor:'white'
        },
    },
    date:{
        color:theme => theme.main.color,
        fontSize:12,

    },
    icon:{
        marginRight:5+'px',
        color:theme => theme.main.color
    },
    interact:{
        '&:hover':{
            color:theme => theme.main.color
        }
    }
})
const Overlay = styled('div')({
    width:'100%',
    height:'100%',
    position:'absolute',
    zIndex:2,
    background:'rgba(0,0,0,0.7)',
    top:0,
    left:0
})
function BigCard() {
    const classes = useStyles()
    console.log('hello')
    return (
        <Card sx={classes.root}>
            <CardMedia
            image='/assets/images/movies/s12.jpg'
            sx={classes.img}
            />
            <CardContent sx={classes.content}>
                <Typography gutterBottom component="span" sx={classes.date}>
                    11/09/2021 | Huydepzai
                </Typography>
                <CommonLink to='#' sx={{display:'block',color:'#fff'}}>
                    Ra mắt Shangchi legend
                </CommonLink>
                <Typography variant="body1" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                <Grid container style={{marginTop:10}} alignItems='flex-end'>
                    <ThumbUpOutlined sx={classes.icon}/>
                    <Typography variant="body2" component='span' sx={classes.interact}>
                        120 likes
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <ModeCommentOutlined sx={classes.icon}/>
                    <Typography variant="body2" component='span' sx={classes.interact}>
                        50 comments
                    </Typography>
                </Grid>
            </CardContent>

            <Overlay/>
        </Card>
    )
}

export default BigCard
