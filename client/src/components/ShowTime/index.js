import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {Button, Dialog as MuiDialog, DialogActions, DialogContent, DialogTitle as MuiDialogTitle, Grid, IconButton, Stack, Typography, useMediaQuery, useTheme} from '@mui/material';
import { Close } from '@mui/icons-material'
import { useStyles } from './style';
import ShowTimeItem from './ShowTimeItem';
import { showtimes } from '../../mockData/movies';
const Dialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiPaper-root': {
      width:'100%',
      height:'100%'
  },
  '& .MuiDialogContent-root': {
    padding: 0,
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const DialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <MuiDialogTitle sx={{ m: 0, p: 2, bgcolor:'#333545' }} {...other} component='div'>
      <Typography color='white' align='center' component='div' variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#fff',
          }}
        >
          <Close />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

const getDay = (date)=>{
  let nameOfDay;
  const dayOfWeekNumber = date.getDay();
  switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Sun';
        break;
    case 1:
        nameOfDay = 'Mon';
        break;
    case 2:
        nameOfDay = 'Tues';
        break;
    case 3:
        nameOfDay = 'Wed';
        break;
    case 4:
        nameOfDay = 'Thu';
        break;
    case 5:
        nameOfDay = 'Fri';
        break;
    case 6:
        nameOfDay = 'Sat';
        break;
    default:
        nameOfDay = 'undefined'
  }
  return nameOfDay
}

const getDate = (active)=>{
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const date = new Date().getDate()

  return new Date(year,month,date+active,0,0,0,0)
}

const DateView = (props)=>{
  const {selected,index,time,...other} = props
  const active = selected === index
  const date = new Date(time)
  const root = (active)=>({
    cursor:'pointer',
    width:70,
    backgroundColor:active?'#fff':'transparent',
    borderRadius:5+'px',
    overflow:'hidden',
    '& span':{
      color:active?'#111111':'#fff',
      width:'100%',
      textAlign:'center'
    },
    '& .date':{
      backgroundColor:theme => active?theme.main.color:'transparent',
      color:'#fff',
    }
  })
  return(
    <Stack direction='column' sx={root(active)} {...other} alignItems='center'>
        <Typography variant='button' className='date'>{getDay(date)}</Typography>
        <Typography variant='button'>{date.getDate()}</Typography>
    </Stack>
  )
}

export default function ShowTime({open,handleClickOpen,handleClose}) {
  const [active,setActive] = React.useState(0)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = useStyles()
  const [data,setData] = React.useState({})

  React.useEffect(()=>{
    const time = getDate(active)
    const index = showtimes.findIndex((e)=>e.date.getTime()===time.getTime())
    setData(d => showtimes[index])
  },[active])


  return (
      <Dialog
        open={open}
        fullScreen={fullScreen}
        maxWidth='lg'
      >
        <DialogTitle onClose={handleClose}>
          Lịch chiếu
        </DialogTitle>
        <DialogContent>
          <Stack sx={classes.dateStack} direction='row' spacing={1}>
              {Array(5).fill(0).map((e,i)=>{
                return (<DateView selected={active} index={i} time={new Date().getTime()+i*1000*60*60*24} key={i}
                onClick ={()=> setActive(i)}
                />)
              })}
          </Stack>
          
          <Grid container direction='column' spacing={1} sx={{mt:0.5}}>
              {
                data.theaters?.map((e,i)=>(
                  <Grid item xs={12} key={i}> 
                    <ShowTimeItem data={e}/>
                  </Grid>
                ))
              }
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
  );
}