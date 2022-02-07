import React from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkMUI } from '@mui/material'
import { styled } from '@mui/system'

const CommonLink = styled((props)=>{
    const {children,...other} = props
    return (
        <LinkMUI component={Link}  {...other}>
            {children}
        </LinkMUI>
    )
})(({theme})=>({
    textDecoration:'none',
    marginBottom:'0.35em',
    fontSize: '1.1rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 500,
    letterSpacing: '0em',
    color:'#111111',
    '&:hover':{
        color:theme.main.color
    },
    textTransform:'capitalize'
}))


export default CommonLink
 