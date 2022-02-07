
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import CommonLink from '../CommonLink'
const useStyles = ()=>({
    root:{
        backgroundColor:'inherit'
    },
    img:{
        paddingBottom:'45%',
        width:'100%',
        borderRadius:5+'px'
    },
    content:{
        paddingLeft:0,
        paddingRight:0,
        background:'inherit'
    },
    link:{
        display: '-webkit-box',
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
})

function BlogCardI({data,...other}) {
    const {title, date, img, href} = data
    const classes = useStyles()
    return (
        <Card elevation={0} sx={classes.root}>
            <CardMedia
            image={img}
            sx={classes.img}
            />
            <CardContent sx={classes.content}>
                <CommonLink sx={classes.link} to={href}>
                    {title}
                </CommonLink>
                <Typography variant='subtitle1' component='p'>
                    {new Date(date).toISOString().slice(0, 10).split('-').reverse().join('/')}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default BlogCardI
