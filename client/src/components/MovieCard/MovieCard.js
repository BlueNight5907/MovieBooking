import { Link as LinkMUI,Avatar, Button, Card, CardContent, CardMedia, Chip, Grid, IconButton, Rating, Typography } from '@mui/material';
import { PlayArrowRounded } from '@mui/icons-material'
import React,{useState}from 'react';
import {Link as LinkRouter} from 'react-router-dom'
import {useStyles} from './style'

const Link = ({children,...other}) => <LinkMUI component={LinkRouter} {...other}>{children}</LinkMUI>

function MovieCard({data,test,...others}) {
    const [cardHovered,setCardHovered] = useState(false)
    const handleMouseEntered = ()=>{
        setCardHovered(true)
    }
    const handleMouseLeaved = ()=>{
        setCardHovered(false)
    }
    const setElevation =()=>{
        if(cardHovered) return {elevation:5}
        return {elevation:0}
    }
    const classes = useStyles({cardHovered})
    return (
        <Card sx={classes.root}
            {...setElevation()}
            onMouseEnter={handleMouseEntered}
            onMouseLeave={handleMouseLeaved}>
            <CardMedia
                sx = {classes.img}
                image = {data.src}
                title = 'movie'
            >
                <Chip sx={classes.chip} label='C18'/>
                <IconButton sx={classes.play}>
                    <PlayArrowRounded fontSize="large"/>
                </IconButton>
            </CardMedia>
            <CardContent sx={classes.content}>
                
                <Link to={data.href?data.href:'#'} sx={classes.movieName}>
                    <Typography component='span'>
                        Yêu em từ cái nhìn đầu tiên
                    </Typography>
                </Link>
                <Grid container>
                    <Grid item xs={7}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Tình cảm, Hài hước
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            120 phút
                        </Typography>
                    </Grid>
                    <Grid item container xs={5} justifyContent='flex-end'>
                        <Button sx={classes.detail}
                            variant='outlined'
                            component={Link}
                            to='/movie/abc'
                        >
                            Chi tiết
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
            
            <Avatar variant='square' sx={classes.rate}>
                <Rating name="read-only" value={10} readOnly />
                <Typography>
                    10
                </Typography>
            </Avatar>
        </Card>
    )
}

export default MovieCard
