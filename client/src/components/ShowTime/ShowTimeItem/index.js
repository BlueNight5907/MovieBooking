import { Avatar, Button, Paper, Stack, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import { Link } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
const useStyles = ()=>{

}
const Wrapper = styled(Paper)(({theme})=>({
    display:'flex',
    padding:10,
    background:theme.main.background,
    gap:5,
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column',
    }
}))
const InforWrapper = styled(Box)(({theme})=>({
    display:'flex',
    flexShrink:0,
    flexDirection:'column',
    gap:5,
    width:180,
    [theme.breakpoints.down('sm')]:{
        width:'100%',
        padding:'0 10px'
    }
}))

const Label = styled('img')({
    width:25,
    height:25,
    objectFit:'cover'
})
const ShowTimeWrapper = styled('div')({
    display:'flex',
    flexDirection:'column',
    gap:5,
    flexGrow:1,
    padding:'0 10px'
})

const TimeItem = styled((props)=>{
    const {children,data,...other} = props
    return(
        <Link component={RouterLink} {...other} color='inherit'>
            <Button color='inherit'>
                {children}
            </Button>
            {
                data&&(
                    <div className='infor-wrapper'>
                        <Paper className='infor'>
                            <Typography color='white' variant='caption'>
                                Rạp số {data.room}
                            </Typography>
                            <Typography sx={{color:theme => theme.main.color}} variant='caption'>
                                {data.full?'Hết chỗ':'Còn chỗ'}
                            </Typography>
                        </Paper>
                    </div>
                )
            }
        </Link>
    )
})(({theme})=>({
    textDecoration:'none',
    position:'relative',
    '& .MuiButton-root':{
        background:'#fff',
        padding:'4px 12px',
        fontSize:'12px',
        border:'0.2px solid #aaa'
    },
    '& .MuiButton-root:hover':{
        color:theme.main.color
    },
    '&:hover .infor-wrapper':{
        visibility:'visible',
        opacity:'1',
    },
    '& .infor-wrapper':{
        position:'absolute',
        bottom:'100%',
        left:'calc(-100%/4)',
        background:'transparent',
        visibility:'hidden',
        transition:'all 0.3s ease-in-out',
        opacity:'0',
        '& .infor':{
            padding:10,
            marginBottom:10,
            position:'relative',
            background:'#333545',
            minWidth:120,
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            border:'0.3px solid #bbb',
        },
        '& .infor::before':{
            position:'absolute',
            content:'""',
            width:10,
            height:10,
            borderRight:'1px solid #ccc',
            borderBottom:'1px solid #ccc',
            background:'inherit',
            bottom:'-6px',
            left:'50%',
            zIndex:1,
            transform:'translateX(-50%) rotate(45deg)',
            
        }
    }
}))
const condition = (e1,e2)=>{
    return e1.time.getTime() - e2.time.getTime()
}
const getTimeAMPMFormat = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours;
    // appending zero in the start if hours less than 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  };
function ShowTimeItem({data}) {
    const {tags,showtime} = data
    const sortedShowtime = showtime?showtime.sort(condition):[]
    return (
        <Wrapper elevation={0}>
            <InforWrapper>
                <Typography variant='subtitle2'>
                    {data.name}
                </Typography>
                <Stack direction='row' spacing={1} flexWrap='wrap'>
                    {
                        tags.hasDiscount&&(<Label src='/assets/images/icons/coupon.svg' alt='ticket'/>)
                    }
                    {
                        tags.isVip&&(<Label src='/assets/images/icons/vip-card.svg' alt='ticket'/>)
                    }
                    {
                        tags.is3D&&(<Label src='/assets/images/icons/3d-glasses.svg' alt='ticket'/>)
                    }
                    {
                        tags.hasPopcorn&&(<Label src='/assets/images/icons/popcorn.svg' alt='ticket'/>)
                    }
                    
                    
                </Stack>
            </InforWrapper>
            <ShowTimeWrapper>
                <Stack direction='row' flexWrap='wrap' sx={{gap:10+'px'}}>
                    {
                        sortedShowtime.map(e =>(
                            <TimeItem to='#' key={e.id} data={{room:e.room,full:e.full}}>
                                {getTimeAMPMFormat(e.time)}
                            </TimeItem>
                        ))
                    }
                    
                </Stack>
                {
                    data.message&&(
                        <Typography color='green' variant='caption'>
                            {data.message}
                        </Typography>
                    )
                }
            </ShowTimeWrapper>
        </Wrapper>
    )
}

export default ShowTimeItem
