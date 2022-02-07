import { styled } from "@mui/system"
import { Link as RouterLink } from 'react-router-dom'
import {Link as MUILink} from '@mui/material'
export const useStyles = ()=>({
    card:{
        width:'100%',
        height:'100%',
        borderRadius:10+'px',
        display:'flex',
        flexDirection:'column'
    },
    imgWrapper:{
        width:'100%',
        paddingBottom:'60%',
        position:"relative",
        overflow:'hidden',
        '& img':{
            position:'absolute',
            width:'100%',
            height:'100%',
            objectFit:'cover',
            transition:'transform 0.3s ease-in-out'
        },
        flexShrink:0
    },
    content:{
        flexGrow:1,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',

    },
    contentText:{
        display: '-webkit-box',
        WebkitlineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign:'justify'
    },
})

export const Wrapper = styled('div')({
    width:'100%',
    padding:'0 5px 4px',
    '&:hover':{
        '& img':{
            transform:'scale(1.1)',
        },
        '& .goto':{
            bottom:0
        },
    }
})

export const Goto = styled((props)=>{
    const {children,...other} = props 
    return(
        <MUILink component={RouterLink} {...other}>
            {children}
        </MUILink>
    )
})(({theme})=>({
    width:150,
    height:45,
    lineHeight:45,
    color:'#ffffff',
    backgroundColor:theme.main.color,
    borderRadius:'10px 10px 0 0',
    position:'absolute',
    bottom:-45,
    left:'50%',
    zIndex:11,
    transform:'translateX(-50%)',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    textDecoration:'none',
    transition:'all 0.3s ease-in-out'
}))