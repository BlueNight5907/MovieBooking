import React from 'react'
import SectionTitle from '../../../components/SectionTitle'
import PlayButton from '../../../components/PlayButton/PlayButton'
import { styled } from '@mui/system'
import { Card, CardMedia, Container } from '@mui/material'
const useStyles = ()=>({
    card:{
        position:'relative',
        marginTop:4
    },
    img:{
        width:'100%',
        paddingBottom:'52.25%'
    }

})
const Wrapper = styled('section')(({theme})=>({
    flexGrow:1,
    width:'100%',
    backgroundColor:theme.main.background,
    paddingBottom:40
}))
function BestMovie() {
    const classes = useStyles()
    return (
        <Wrapper className='best-movie'>
            <Container>
                <SectionTitle>
                    Best movies
                </SectionTitle>
                <Card sx={classes.card}>
                    <CardMedia
                        image='/assets/images/movies/s3.jpg'
                        sx={classes.img}
                    />
                    <PlayButton/>
                </Card>
            </Container>
        </Wrapper>
    )
}

export default BestMovie
