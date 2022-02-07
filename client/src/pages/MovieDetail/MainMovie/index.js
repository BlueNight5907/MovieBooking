import React from 'react'
import PlayButton from '../../../components/PlayButton/PlayButton'
import { Link as RouterLink } from 'react-router-dom'
import { MovieInforWrapper, StyledRating, Types, useStyles, Wrapper } from './style'
import ShowTime from '../../../components/ShowTime'
import { Avatar, Button, Card, CardMedia, Chip, Container, Grid, Link, Paper, SvgIcon, Typography } from '@mui/material'
import { CreditCard, Favorite, Instagram, Twitter, YouTube } from '@mui/icons-material'

const movieTypes = [
    'Hành động','Viễn tưỡng'
]


const Facebook = (props)=><SvgIcon {...props}><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" sx="svg-inline--fa fa-facebook-f fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></SvgIcon>
const CustomLink = (props)=> <Link {...props} component={RouterLink} />

function MainMovie() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };
    const handleClose = () => {
    setOpen(false);
    };
    const classes = useStyles()
    return (
        <Wrapper className='main-movie-detail'>
            <Container sx={classes.trailerWrapper}>
                <Paper elevation={2} sx={classes.paper}>
                    <Card elevation={0}>
                        <CardMedia
                        sx = {classes.trailer}
                        image = '/assets/images/movies/s3.jpg'>
                            <PlayButton></PlayButton>
                            <Grid container justifyContent='space-between'
                            alignItems='center'
                            sx={classes.trailerBottom}>
                                <Grid item container sx={classes.social}>
                                    <Avatar className='fb' sx={classes.socialIcon}>
                                        <Facebook fontSize='small'/>
                                    </Avatar>
                                    <Avatar className='twt' sx={classes.socialIcon}>
                                        <Twitter fontSize='small'/>
                                    </Avatar>
                                    <Avatar className='ins' sx={classes.socialIcon}>
                                        <Instagram fontSize='small'/>
                                    </Avatar>
                                    <Avatar className='utub' sx={classes.socialIcon}>
                                        <YouTube fontSize='small'/>
                                    </Avatar>
                                </Grid>
                                <Grid item container alignItems='center' sx={classes.social}>
                                    <Typography sx={classes.time}>
                                        2 giờ 30 phút
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardMedia>
                    </Card>
                </Paper> 
            </Container>
            <Container >
                <Grid container alignItems='center'
                justifyContent='flex-end' sx={classes.date}>
                    <img src="/assets/images/icons/QAyfjudAqqG.png" alt="icon" />
                    <Typography>
                        Th4, 15/09/2021
                    </Typography>
                </Grid>
            </Container>
            <MovieInforWrapper>
                <Container>
                    <Grid container sx={classes.infor}>
                        <Grid item xs={12} md={4} lg={5}
                        container direction='column'>
                            <Typography component='h2' variant='button' sx={classes.movieName}>
                                Godzila
                            </Typography>
                            {movieTypes&&(
                                <Types>
                                    {
                                        movieTypes.map((e)=>(
                                            <li key={e}>
                                                <Chip
                                                label={e}
                                                style={{color:'#fff',
                                                        borderColor:'#fff'}}
                                                variant="outlined"
                                                />
                                            </li>
                                        ))
                                    }
                                </Types>
                            )}
                        </Grid>
                        <Grid item xs={12} md={8} lg={7} container 
                        style={{paddingTop:10,
                                paddingBottom:10,
                                gap:10}}
                        alignItems='center' justifyContent='space-between'>
                            <Grid item sx={{width:{xs:'100%', sm:'unset'}}}>
                                <Grid container alignItems='center' style={{gap:5}}>
                                    <CreditCard sx={classes.icon}/>
                                    <Typography variant='h6'>
                                        75000đ
                                    </Typography>
                                </Grid>
                                <Typography>
                                    Giá vé cơ bản
                                </Typography>
                            </Grid>
                            <Grid item>
                                <StyledRating
                                    name="customized-color"
                                    defaultValue={4.5}
                                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={0.5}
                                    readOnly
                                    icon={<Favorite fontSize="inherit" />}
                                    emptyIcon={<Favorite fontSize="inherit" />}
                                />
                                <Typography>
                                    Đánh giá người xem
                                </Typography>
                            </Grid>
                            <Grid item>
                                <StyledRating
                                    name="customized-color"
                                    defaultValue={0}
                                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={0.5}
                                    icon={<Favorite fontSize="inherit" />}
                                    emptyIcon={<Favorite fontSize="inherit" />}
                                />
                                <Typography>
                                    Chấm điểm
                                </Typography>
                            </Grid>
                            <CustomLink to='#'>
                                <Button 
                                sx={classes.booking}
                                component='span'
                                onClick={handleClickOpen}>
                                    Đặt vé ngay
                                </Button>
                            </CustomLink>
                        </Grid>
                    </Grid>    
                </Container>
            </MovieInforWrapper>
            <ShowTime open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/>
        </Wrapper>
    )
}

export default MainMovie
