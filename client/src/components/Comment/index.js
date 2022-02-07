import {styled, alpha, Menu, MenuItem, Rating, IconButton, Grid, CircularProgress, Typography, Paper, Avatar } from '@mui/material'
import { DeleteRounded, Edit, Favorite, MoreHoriz, ThumbUpAltOutlined } from '@mui/icons-material'
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { useStyles } from './style'
const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: -5,
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
}));

export const StyledRating = styled(Rating)(({theme})=>({
  '& .MuiRating-iconFilled': {
    color: theme.main.color,
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
}));

function Comment({data}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isLiked,setIsLiked] = useState(data.isLiked||false);
    const [loading,setLoading] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleLike = ()=>{
        if(!loading){
          setLoading(true)
          const timeOut = setInterval(()=>{
            setIsLiked(like => !like)
            setLoading(loading => !loading)
            return clearInterval(timeOut)
          },3000)
        }
    }
    const classes = useStyles()

    return (
        <Paper elevation={0}
        sx = {classes.root}
        >
            <Avatar
            src={data.img || ''}
            sx={classes.avt}
            />
            <Paper elevation={0} style={{flexGrow:1}}>
              <Paper elevation={0} sx={classes.content}>
                  <Grid 
                  container
                  direction='column'
                  alignItems='flex-start'
                  sx={classes.userInfor}>
                      <Typography sx={classes.username}>
                          {data.name}
                      </Typography>
                      <Typography component='span'>
                          {data.isMod?'Admin':'Thành viên'}
                      </Typography>
                      
                  </Grid>
                  <Box>
                      <Typography variant='body2'>
                          {data.content}
                      </Typography>
                  </Box>
              </Paper>
              <Grid style={{
                padding:'0px 5px 0 10px',
              }}
              alignItems='center'
              container justifyContent='space-between'>
                  <Grid item sx={classes.likeWrapper}>
                      <Typography 
                      onClick={handleLike}
                      sx={classes.like}
                      className={isLiked?'active':''}>
                        <ThumbUpAltOutlined fontSize='small'/> Thích
                      </Typography> 
                      <Typography component='span'>
                         {data.likes}
                      </Typography>
                      {loading&&<CircularProgress size={25}/>}
                  </Grid>
                  <Grid item style={{display:'flex'}}>
                    <StyledRating
                        defaultValue={data.rate}
                        precision={0.5}
                        readOnly
                        icon={<Favorite fontSize="small" />}
                        emptyIcon={<Favorite fontSize="inherit" />}
                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    />
                  </Grid>
              </Grid>
            </Paper>
            <IconButton 
            onClick={handleClick}
            sx={classes.moreBtn}>
                <MoreHoriz/>
            </IconButton>
            <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
            'aria-labelledby': 'action-btn',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              elevation: 3,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  bottom: -10,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            >
              <MenuItem onClick={handleClose} disableRipple>
              <Edit />
              Chỉnh sửa
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
              <DeleteRounded/>
              Xóa bình luận
              </MenuItem>
        </StyledMenu>
        </Paper>
    )
}

export default Comment
