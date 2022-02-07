import { Button } from '@mui/material'
import React from 'react'
const useStyle = ()=>({
    root:{
        color:'#fff',
        backgroundColor:theme => theme.main.color,
        height:50,
        verticalAlign:'middle',
        width:150,
        borderRadius:10,
        border:theme => '1px solid '+theme.main.color,
        '&:hover':{
            color:theme => theme.main.color,
            backgroundColor:'#fff',
        }

    }
})
function MainButton({children,...other}) {
    const classes = useStyle()
    return (
        <Button {...other} sx={classes.root}>
            {children}
        </Button>
    )
}

export default MainButton
