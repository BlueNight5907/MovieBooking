import React from 'react'
import {Paper} from '@mui/material'
import { styled } from '@mui/material/styles'
const useStyles = ()=>({
    root:{
        width:'100%',
        position:'relative',
        paddingBottom:'45%',
    }
})

const Img = styled('img',{
    shouldForwardProp:(prop) => prop !== 'active'
})(({active,theme})=>({
    position:'absolute',
    width:'100%',
    height:'100%',
    objectFit:'cover',
    backgroundColor:'rgb(0,0,0)',
    padding: active?'unset':'5px',
    [theme.breakpoints.up('md')]:{
        padding:active?'5px':'10px'
    }
}))

function CaroselItemMini({src,active}) {
    const classes = useStyles()
    return (
        <Paper sx={classes.root} square>
            <Img  src={src} alt="slide img" active={active}/>
        </Paper>
    )
}

export default CaroselItemMini
