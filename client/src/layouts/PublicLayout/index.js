
import { PlayArrowRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { Fragment } from 'react'
import ScrollToTop from 'react-scroll-up'
import Footer from './Footer'
import Header from './Header'


//style M-UI
const useStyles = ()=>({
    styleScrollToTop: {
        position: "fixed",
        bottom: 30,
        right: 20,
        color:'white',
        transform: "rotate(-90deg)",
        backgroundColor:theme => theme.main.color,
        transitionTimingFunction: "linear",
        border:theme => '2px solid '+ theme.main.color,
        width: 45,
        height:45,
        zIndex: 5000,
        "&:hover": { 
            color:theme => theme.main.color,
            backgroundColor:'white',
        },
        transition: "all .2s",
    },
})
function PublicLayout({children}) {

    //classes M-UI
    const classes = useStyles()
    return (
        <Fragment>
            <Header/>
            {children}
            <Footer/>
            <ScrollToTop showUnder={160}>
                <IconButton sx={classes.styleScrollToTop}>
                    <PlayArrowRounded fontSize='large'/>
                </IconButton>
            </ScrollToTop>
        </Fragment>
    )
}

export default PublicLayout
