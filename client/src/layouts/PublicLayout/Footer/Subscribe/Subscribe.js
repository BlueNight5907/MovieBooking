import { Button, Container, FormGroup, Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
const useStyles = ()=>({
    root:{
        backgroundColor:theme => theme.main.color,
        padding:'60px 0'
    },
    title:{
        color:'#fff',
        fontSize:'28px',
        textTransform:'uppercase',
        fontWeight:500,
        margin:'12px 0'
    },
    button:{
        width:120,
        backgroundColor:'#fff',
        color:theme => theme.main.color,
        textTransform:'Capitalize',
        borderRadius:'0 5px 5px 0',
        '&:hover':{
            backgroundColor:'#000',
            color:'white'
        },
        fontWeight:600,
        transition:'all 0.3s ease-in-out'
    }
})

const Input = styled('input')({
    color:'#fff',
    flex:1,
    border:'2px solid rgba(255, 255, 255, 0.33)',
    padding:'0px 15px',
    height:50,
    backgroundColor:'transparent',
    borderRadius:'5px 0 0 5px',
    borderRight:'none',
    '&:focus': {
        borderColor: 'white',
        outline:'none'
    },
    '&::placeholder':{
        color:'#fff'
    },
})

function Subscribe() {
    const classes = useStyles()
    return (
        <section className='subscribe'>
            <Paper elevation={0} square sx={classes.root}>
                <Container>
                    <Grid
                    alignItems='center'
                    container>
                        <Grid item xs={12} md={6}>
                            <Typography
                            sx={classes.title}
                            component='h3'>
                                get update sign up now!
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <form>
                                <FormGroup row>
                                    <Input type="text" 
                                    placeholder='Enter your Email'
                                    />
                                    <Button sx={classes.button}>Subscribe</Button>
                                </FormGroup> 
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </section>
    )
}
export default Subscribe
