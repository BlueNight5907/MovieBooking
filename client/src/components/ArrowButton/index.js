
import React from 'react'
import clsx from 'clsx'
import { IconButton,styled } from '@mui/material'
const useStyles = ()=>({
    button:{
        backgroundColor:theme => theme.main.color,
        width:40,
        height:40,
        color:'#fff',
        '&:hover':{
            backgroundColor:theme => theme.main.colorHover,
        },
        transition: 'all 0.3s ease-in-out'
    }

})
const ButtonWrapper = styled('div')(({theme})=>({
    position:'absolute',
    zIndex:2,
    top:'50%',
    transform:'translateY(-50%)',
    '&.left':{
        left:-10,
        [theme.breakpoints.up('xl')]:{
            left:-50,
        }
    },
    '&.right':{
        right:-10,
        [theme.breakpoints.up('xl')]:{
            right:-50,
        }
    }
}))
function ArrowButton({Icon,onClick,iconStyle,right,left,buttonStyle}) {
    const classes = useStyles()
    return (
        <ButtonWrapper className={clsx(
            left&&'left',
            right&&'right'
            )}>
            <IconButton
            sx={classes.button}
            {...buttonStyle} onClick={onClick} >
                <Icon
                sx={classes.icon} 
                style={{...iconStyle}} />
            </IconButton>
        </ButtonWrapper>
    )
}

export default ArrowButton
