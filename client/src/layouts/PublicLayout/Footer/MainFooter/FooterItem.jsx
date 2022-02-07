import { Button, Grid, MenuItem, MenuList, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import NormalTitle from '../../../../components/NormalTitle/NormalTitle'
import {styled} from '@mui/material'
const useStyles = ()=>({
    footerMenu:{
        
        '& > li':{
            position:'relative'
        },
        '& > li::before':{
            content:"''",
            position:'absolute',
            width:10,
            height:10,
            borderRadius:'50%',
            backgroundColor:theme => theme.main.color,
            left:0
        },
        '& > li > a':{
            textDecoration:'none',
            color:'rgba(255, 255, 255, 0.57)',
            textTransform:'capitalize',
            display: '-webkit-box',
            WebkitLineClamp:2,
            WebkitBoxOrient: 'vertical',
            whiteSpace:'break-spaces',
            '&:hover':{
                textDecoration:'none',
                color:theme => theme.main.color
            }
        }
    },
    button:{
        backgroundColor:theme => theme.main.color,
        color:'#fff',
        textTransform:'capitalize',
        '&:hover':{
            backgroundColor:theme => theme.main.colorHover
        }
    }
})

const ItemContain = styled('div')({
    height:'100%',
    marginBottom:20
})

const Img = styled('img')({
    width:140,
    height:41
})

function FooterItem({data,special}) {
    const classes = useStyles()
    return (
        <ItemContain>
            <NormalTitle>
                {data.name}
            </NormalTitle>
            {special?(
                <div style={{paddingTop:32}}>
                    <Grid container direction='column' alignItems='flex-start' spacing={2}>
                        <Grid item>
                            <Typography style={{color:'#fff'}}>
                                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' sx={classes.button}>Cài đặt Progressive App</Button>
                        </Grid>
                        <Grid item>
                            <Typography style={{color:'#fff'}}>
                                Tải ứng dụng và nhận các ưu đãi
                            </Typography>
                        </Grid>
                        <Grid component='ul' spacing={2} item container justifyContent='flex-start'>
                            <Grid component='li' item>
                                <Link to={''}>
                                    <Img src="/assets/images/icon/google.png" alt="CHplay" />
                                </Link>
                            </Grid>
                            <Grid component='li' item>
                                <Link to={''}>
                                    <Img src="/assets/images/icon/appstore.png" alt="Appstore" />
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            ):(
            <MenuList sx={classes.footerMenu}>
                {data.list.map((e,i)=>(
                    <MenuItem key={i}>
                        <Link to = {e.href||''} >{e.name}</Link>
                    </MenuItem>
                ))}
            </MenuList>)}
        </ItemContain>
        
    )
}

export default FooterItem
