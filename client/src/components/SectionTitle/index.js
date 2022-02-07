import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const useStyles = ()=>({
    title:{
        color:'#000000',
        fontWeight:'500',
        textTransform:'uppercase',
        position:'relative',
        fontSize:32,
        lineHeight:'1.1',
        '&:before':{
            content:"''",
            position:'absolute',
            bottom:'-21px',
            left:0,
            right:0,
            width:30,
            margin:'0 auto',
            zIndex:1,
            border:theme => '2px solid '+theme.main.color
        },
        '&:after':{
            content: "''",
            border: '1px solid #dddddd',
            width: '170px',
            position: 'absolute',
            bottom: '-20px',
            left: 0,
            right: 0,
            margin: '0px auto'
        }
    }
})

const TitleWrapper = styled('div')({
    paddingBottom:30,
})

function SectionTitle({children}) {
    const classes = useStyles()
    return (
        <TitleWrapper>
            <Typography component='h2' align='center' sx={classes.title}>
                {children}
            </Typography>
        </TitleWrapper>
    )
}

export default SectionTitle
