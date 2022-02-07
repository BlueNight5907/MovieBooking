import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
const NormalTitle = styled(({children,sx, ...other})=>{
    return (
        <Typography {...other} component='h2' sx={sx}>
                {children}
        </Typography>
    )
})(({theme})=>({
    color:'#fff',
    fontWeight:500,
    position:'relative',
    textTransform:'uppercase',
    fontSize:18,
    marginBottom:'32px',
    '&::after':{
        content:"''",
        width:90,
        border:'1px solid rgba(255,255,255,0.28)',
        position:'absolute',
        bottom:-20,
        left:0
    },
    '&::before':{
        content:"''",
        width:30,
        border:'2px solid '+theme.main.color,
        position:'absolute',
        bottom:-21,
        left:0,
        zIndex:2,
        backgroundColor:theme.main.color
    }
}))

export default NormalTitle
