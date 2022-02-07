import { ButtonBase, Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import NormalTitle from '../../../components/NormalTitle/NormalTitle'
import { Background, Wrapper } from './style'
import { useStyle } from './style'

function MoreInfor() {
    const classes = useStyle()
    return (
        <Wrapper>
            <Paper sx={classes.box}>
                hello
            </Paper>
            <ButtonBase to='#' component={Link}
            sx={classes.contactbtn}>
                Liên hệ quảng cáo
            </ButtonBase>
            <NormalTitle sx={classes.title}>
                Phim sắp chiếu
            </NormalTitle>
            <Background sx={classes.box} elevation={0}>
                <img src="/assets/images/background/rightbg.jpg" alt="bg" />
            </Background>
        </Wrapper>
    )
}

export default MoreInfor
