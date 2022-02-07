import React from 'react'
import { styled } from '@mui/material/styles'
import { IconButton } from '@mui/material'
import {PlayArrowRounded} from '@mui/icons-material'
const Wrapper = styled('div')(({theme})=>({
    position:'absolute',
    top:'50%',
    left:'50%',
    border:'10px solid rgba(255, 255, 255, 0.29)',
    borderRadius:'100%',
    transform:'translate(-50%,-50%)',
    zIndex:2,
    '& button':{
        color:'#fff',
        background:'rgba(255,68,68,0.6)',
        animation: 'pulse 1.2s infinite cubic-bezier(0.66, 0, 0, 1)',
        boxShadow: '0 0 0 0 rgb(225 225 225 / 60%)',
        '&:hover':{
            background:theme.main.color
        },
        '& .MuiSvgIcon-root':{
            fontSize:'2rem'
        },
        [theme.breakpoints.up('md')]:{
            width:90,
            height:90,
            lineHeight:'90px',
            '& .MuiSvgIcon-root':{
                fontSize:'60px'
            },
        }
    }
}))
function PlayButton(props) {
    
    return (
        <Wrapper>
            <IconButton {...props}><PlayArrowRounded/></IconButton>
        </Wrapper>
    )
}

export default PlayButton
