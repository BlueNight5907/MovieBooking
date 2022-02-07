import { Paper } from '@mui/material'
import React, { Fragment, useEffect, useMemo, useState } from 'react'

const useStyles = ()=>({
    paper:{
        width:'100%',
        minHeight:400,
        padding:'20px 0'
    }
})

function Summary({value,index,data,...others}) {
    const classes = useStyles()
    return (
        <div>
            {value === index &&(
                <Paper elevation={0} sx={classes.paper}>
                    
                </Paper>
            )}
        </div>
    )
}

export default Summary
