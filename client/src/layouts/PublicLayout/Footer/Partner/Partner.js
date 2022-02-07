import { Container, Grid, Paper } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../../components/SectionTitle'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import ArrowButton from '../../../../components/ArrowButton';
import PartnerItem from './PartnerItem/PartnerItem';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const useStyles = ()=>({
    root:{
        padding:'94px 0',
        backgroundColor:'#fff'
    }
})
//next and prev button
const next = ()=>(<ArrowButton right
                    Icon={ArrowForwardIos}
                 />)
const prev = ()=>(<ArrowButton left
                    Icon={ArrowBackIos}
                    iconStyle={{transform:'translateX(20%)'}}
                />)
//setting for slider
const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    Fade: true,
    nextArrow: next(),
    prevArrow: prev(),
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};


function Partner() {
    const classes = useStyles()
    return (
        <section className='partners'>
            <Paper square sx={classes.root} elevation={0}>
                <Container>
                    <Grid container>
                        <Grid item xs={12}>
                            <SectionTitle>our partner's</SectionTitle>
                        </Grid>
                        <Grid item xs={12}>
                            <Slider {...settings}>
                                {Array(11).fill(0).map((e,i)=>{
                                    return(
                                        <PartnerItem key={i} item={i+1}/>
                                    )
                                })}
                            </Slider>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </section>
    )
}

export default Partner
