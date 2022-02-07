import React from 'react'
import SectionTitle from '../../../components/SectionTitle'
import BigCard from './BigCard'
import SmallCard from './SmallCard'
import MainButton from '../../../components/MainButton'
import { styled } from '@mui/system'
import { Container, Grid } from '@mui/material'

const Wrapper = styled('section')(({theme})=> ({
    padding:'32px 0',
    background:theme.main.background
}))
function LatestNews() {
    
    return (
        <Wrapper className='latest-news'>
            <Container>
                <SectionTitle>
                    Latest News
                </SectionTitle>
                <Grid container spacing={2} style={{marginTop:32}}>
                    <Grid item xs={12} md={6}>
                        <BigCard/>
                    </Grid>
                    <Grid item container xs={12} md={6} style={{gap:10}}>
                        <Grid item xs={12}>
                            <SmallCard data={{
                                img:'/assets/images/blog/b1.jpg',
                                href:'/abc'
                            }}/>
                        </Grid>
                        <Grid item xs={12}>
                            <SmallCard data={{
                                img:'/assets/images/blog/b2.jpg',
                                href:'/def'
                            }}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center' style={{marginTop:32}}>
                    <MainButton>Xem toàn bộ</MainButton>
                </Grid>
            </Container>

        </Wrapper>
    )
}

export default LatestNews
