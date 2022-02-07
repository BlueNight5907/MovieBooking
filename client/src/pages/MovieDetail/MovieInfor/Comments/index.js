
import { Grid, Paper } from '@mui/material'
import React, {useEffect, useState } from 'react'
import PostComment from '../../../../components/PostComment'
import Comment from '../../../../components/Comment'
import {comments} from '../../../../mockData/users'
const useStyles = ()=>({
    paper:{
        width:'100%',
        minHeight:400,
        padding:'20px 0'
    },
    cmtWrapper:{
        padding:'20px 0',
        
    }
})

function Comments({value,index,data,...others}) {
    const classes = useStyles()
    return (
        <div className='comments'>
            {value === index &&(
                <Paper elevation={0} sx={classes.paper}>
                    <PostComment/>
                    <Grid container
                    sx = {classes.cmtWrapper}
                    spacing={2} direction='column'>
                        {
                            comments.map((e,i)=>(
                                <Grid item key={i}>
                                    <Comment data={e}/>
                                </Grid>
                            ))
                        }
                        
                    </Grid>
                </Paper>
            )}
        </div>
    )
}

export default Comments
