import { ModeCommentOutlined, ThumbUpOutlined } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import CommonLink from '../../../../components/CommonLink'
const useStyles = ()=>({
    root:{
        display:'flex',
        flexDirection:{xs:'column',sm:'row'},
        '& hr': {
            margin: theme => theme.spacing(0, 1),  
        },
        '&:hover':{
            cursor:'pointer'
        },
    },
    img:{
        height:{xs:'unset',sm:190},
        width:{xs:'100%',sm:190},
        flexShrink:0,
        paddingBottom:{sm:'unset',xs:'40%'},
    },
    link:{
        textDecoration:'none'
    },
    date:{
        color:theme => theme.main.color,
        fontSize:12,
    },
    icon:{
        marginRight:5+'px',
        color:theme => theme.main.color
    },
    content:{
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    interact:{
        '&:hover':{
            color:theme => theme.main.color
        }
    }
})
function SmallCard({data}) {
    const classes = useStyles()
    return (
        <Card sx={classes.root} elevation={3}>
            <CardMedia 
            sx={classes.img}
            image={data.img}
            />
            <CardContent style={{paddingBottom:'16px'}}>
                <Grid style={{height:'100%'}}
                 container direction='column' justifyContent='space-between'>
                    <CommonLink to={data.href?data.href:'#'}>
                        Ra mắt Shangchi legend
                    </CommonLink>
                    <Typography gutterBottom component="span" sx={classes.date}>
                        11/09/2021 | Huydepzai
                    </Typography>
                    <Typography variant="body1" component="p" sx={classes.content}>
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
                </Grid>
                
            </CardContent>
        </Card>
    )
}

export default SmallCard
