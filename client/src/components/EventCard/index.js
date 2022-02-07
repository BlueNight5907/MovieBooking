import React from 'react'
import {Goto, useStyles, Wrapper} from './style'
import CommonLink from '../CommonLink'

import { Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material'

function EventCard({data,...other}) {
    const classes = useStyles()
    return (
        <Wrapper>
            <Card sx={classes.card}>
                <CardMedia
                sx={classes.imgWrapper}
                >  
                    <Goto to='/'
                    sx={classes.goto}
                    className='goto'
                    >
                       <Typography>
                            Xem ngay
                       </Typography>
                    </Goto>
                    <img src={data.img} alt="event" />
                </CardMedia>
                <CardContent sx={classes.content}>
                    <CommonLink to={'/'} style={{
                        fontSize:'1.3rem',
                        fontWeight:500
                    }}>{data.name}</CommonLink>
                    <Typography variant="body2" component="p" sx={classes.contentText}>
                        Khuyen mai giam gia
                    </Typography>
                    <Divider flexItem style={{height:1,margin:'10px 0'}}></Divider>
                    <Grid container justifyContent='space-between'>
                        <Typography variant="subtitle2" component="p" sx={classes.contentText}>
                            07/08 - 08/08/2021
                        </Typography>
                        <Typography variant="subtitle2" component="p" sx={classes.contentText}>
                            8:00 AM
                        </Typography>
                    </Grid>
                </CardContent>
            </Card>
        </Wrapper>
    )
}
export default EventCard
