import { Chip, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const useStyles = ()=>({
    paper:{
        width:'100%',
        minHeight:400,
        padding:'20px 0'
    }
})

function Summary({value,index,data,...others}) {
    const [keys,setKeys] = useState(
            data?Object.keys(data).filter(e => e !== 'types' && e !== 'content'):[]
        )
    useEffect(()=>{
        setKeys(data?Object.keys(data).filter(e => e !== 'types' && e !== 'content'):[])
    },[data])
    const classes = useStyles()
    
    return (
        <div>
            {value === index &&(
                <Paper elevation={0} sx={classes.paper}>
                    {data&&(
                        <Grid container spacing={1}>
                            <Grid item xs={12} >
                            {
                                (keys.length>0) && keys.map((e,i)=>{
                                    return <Typography gutterBottom key={i}>
                                            {e}: {data[e]}
                                        </Typography>
                                })
                            }
                                <Typography gutterBottom>
                                    Thể loại: {
                                        !data.types?'Chưa cập nhật':
                                        data.types.map((e,i)=>{
                                            return(
                                                <Chip component='span' variant='outlined' color='primary' style={{marginRight:5}} label={e} key={i}/>
                                            )
                                        })
                                    }
                                </Typography>
                                <Typography>
                                Nội dung: {data.content?data.content:'Chưa cập nhật'}
                                </Typography>
                            </Grid>
                        </Grid>
                    )}

                </Paper>
            )}
        </div>
    )
}

export default Summary
