import React, { useEffect, useRef, useState } from 'react';
import {FirstSlideWrapper, Overlay, SecondSlideWrapper} from './style';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {moviesCarosel} from '../../../mockData/movies'
import CaroselItem from './CaroselItem/CaroselItem';
import CaroselItemMini from './CaroselItem/CaroselItemMini';



function HomeCarosel() {

    const slider1 = useRef(null)
    const slider2 = useRef(null)
    const [nav,setNav] = useState({nav1:null,nav2:null})
    const [imageIndex, setImageIndex] = useState(0);

    const slide2settings = {
        infinite: true,
        lazyLoad: true,
        slidesToShow: 5,
        centerMode: true,
        swipeToSlide:true,
        focusOnSelect:true,
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ],
          beforeChange: (current, next) => {
            setImageIndex(next);
        },
    }
    useEffect(()=>{
        setNav({
            nav1:slider1.current,
            nav2:slider2.current
        })
    },[])

    //const classes = useStyles()
    return (
        <section className = 'home-carosel'>
            <FirstSlideWrapper>
                <Slider style = {{zIndex:1}}
                    asNavFor={nav.nav2}
                    
                    ref={slider => (slider1.current = slider)}
                >
                    {
                        moviesCarosel.map((e,i)=>(
                            <CaroselItem src={e.src} href={e.href} key={i}/>
                        ))
                    }
                </Slider>
                <Overlay/>
            </FirstSlideWrapper>
            <SecondSlideWrapper>
                <Slider
                    asNavFor={nav.nav1}
                    ref={slider => (slider2.current = slider)}
                    {...slide2settings}
                >
                    {
                        moviesCarosel.map((e,i)=>(
                            <CaroselItemMini src={e.src} active={i === imageIndex?true:false} key={i}/>
                        ))
                    }
                </Slider>
            </SecondSlideWrapper>
        </section>
    )
}

export default HomeCarosel
