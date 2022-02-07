import { Grid, Box} from '@mui/material'
import React, { Fragment } from 'react'
import MainButton from '../../../../components/MainButton'
import MovieCard from '../../../../components/MovieCard/MovieCard'
import NoMovie from '../../../../components/NoMovie/NoMovie'
const useStyles = ()=>({
    list:{
        marginBottom:'30px'
    },
    panelBox:{
        padding:'20px 0'
    }
})
function MovieTabPanel({value,index,data,...others}) {
    const classes = useStyles()
    return (
        <div>
            {value === index &&(
                 <Box sx={classes.panelBox}>
                     {data?(
                         <Fragment>
                             <Grid sx={classes.list} container  spacing={2}>
                                {data.map((e,index)=>(
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                        <MovieCard data={e}/>
                                    </Grid>
                                ))}
                                
                            </Grid>
                            <Grid container justifyContent='center'>
                                <MainButton>Xem toàn bộ</MainButton>
                            </Grid>
                         </Fragment>
                     ):(
                         <NoMovie/>
                     )}
                </Box>
            )}
           
        </div>
    )
}

export default MovieTabPanel
