import { Paper } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import PlayButton from '../../../../components/PlayButton/PlayButton'
const useStyles = ()=>({
    root:{
        width:'100%',
        position:'relative',
        paddingBottom:{xs:'56.25%',md:'unset'},
        height:{md:'70vh'},
        backgroundColor:'transparent'
    },    
})
const Img = styled('img')(({theme})=>({
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    objectFit:'cover',
    zIndex:1,
    [theme.breakpoints.up('md')]:{
        maxWidth:'calc(80vh * 16 / 9)',
        left:'50%',
        transform:'translateX(-50%)'
    }
}))
function CaroselItem({src,href}) {
    const classes = useStyles()
    return (
        <Paper elevation={0} square sx={classes.root}>
            <Img src={src} alt="slide img" />
            <PlayButton />
        </Paper>
    )
}

export default CaroselItem
