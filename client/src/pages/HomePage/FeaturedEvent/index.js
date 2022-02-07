import React from 'react'
import SectionTitle from '../../../components/SectionTitle'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowButton from '../../../components/ArrowButton';
import EventCard from '../../../components/EventCard'
import { Container, Paper } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { styled } from '@mui/system';
const useStyles = ()=>({
    slideWrapper:{
        margin:{xs:'20px 5px 0',lg:'20px 30px 0'},
        backgroundColor:'inherit',
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
    
    slidesToShow: 3,
    slidesToScroll: 1,
    Fade: true,
    nextArrow: next(),
    prevArrow: prev(),
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          }
      ]
};
const Wrapper = styled('div')(({theme})=>({
    width:'100%',
    backgroundColor:theme.main.background,
    padding:'32px 0'
}))
function FeatureEvent() {
    const classes = useStyles()
    return (
        <Wrapper>
            <Container>
                <SectionTitle>
                    featured events
                </SectionTitle>
                <Paper elevation={0} sx={classes.slideWrapper}>
                    <Slider {...settings}>
                        {Array(4).fill(0).map((e,i)=>{
                            return(
                                <EventCard data={{
                                    img:`/assets/images/events/ft${i+1}.jpg`,
                                    name:'Bạn Nguyệt ngu ngốk'
                                }} key={i}Ư/>
                            )
                        })}
                    </Slider>
                </Paper>
                
            </Container>

        </Wrapper>
    )
}

export default FeatureEvent
