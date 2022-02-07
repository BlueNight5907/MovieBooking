
import { Close, Favorite } from '@mui/icons-material';
import { Avatar, Button, Dialog, DialogContent, DialogTitle as MuiDialogTitle, Divider, Grid, IconButton, InputBase, LinearProgress, Paper, Rating, Typography} from '@mui/material'
import { styled } from '@mui/system';
import React, { Fragment, useState } from 'react'
import { LoadingWrapper, useStyles } from './style';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



export const StyledRating = styled(Rating)(({theme})=>({
    '& .MuiRating-iconFilled': {
      color: theme.main.color,
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
}));

const styles = () => ({
    root: {
      margin: 0,
      padding: theme=>theme.spacing(2),
      '& *':{
          textAlign:'center'
      }
    },
    closeButton: {
      position: 'absolute',
      right: theme => theme.spacing(1),
      top: theme => theme.spacing(1),
      color: theme => theme.palette.grey[500],
    }
});
const DialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    const sx = styles()
    return (
      <MuiDialogTitle sx={sx.root} {...other} component='div'>
        <Typography component='div' variant='h6'>{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" sx={sx.closeButton} onClick={onClose}>
            <Close />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
}

function PostComment() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    
    const [loading, setLoading] = useState(false)
    const classes = useStyles({loading})
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handlePost = (event) => {
        event.preventDefault()
        setLoading(true)
        let timeOut = setTimeout(()=>{
            setLoading(false)
            setOpen(false);
            return clearTimeout(timeOut)
        },4000)
    }

    return (
        <Fragment>
            <Paper component={Grid}
            elevation={0}
            sx={classes.post}
            container
            alignItems='center'>
                <Grid item>
                    <Avatar
                    sx={classes.postAvt}
                    src='/assets/images/users/u33.jfif'
                    />
                </Grid>
                <Grid onClick={handleClickOpen} sx={classes.postInput} item>
                    <Typography
                    component='span' variant='subtitle1'>
                        Thêm bình luận của bạn
                    </Typography>
                </Grid>
            </Paper>

            <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={loading?null:handleClose}
            aria-labelledby='post-comment-form'
            maxWidth='sm'
            PaperProps={{sx:classes.dialog}}
            >
                <DialogTitle id='post-comment-form' onClose={handleClose}>
                    Đăng bình luận
                </DialogTitle>
                <Divider style={{margin:'0 20px 10px'}}/>
                <DialogContent>
                    <Grid container
                    onSubmit={handlePost}
                    component='form' direction='column' spacing={1}>
                        <Grid item container style={{gap:10}}>
                            <Grid item>
                                <Avatar
                                sx={classes.postAvt}
                                src='/assets/images/users/u34.jfif'
                                />
                            </Grid>
                            <Grid item container direction='column' style={{flexGrow:1,width:'unset'}}>
                                <Grid item>
                                    <Typography sx={classes.username}>
                                        Nguyễn Văn Huy
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography component='span' sx={classes.type}>
                                        Thành viên
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item component={InputBase}
                        id="outlined-multiline-static"
                        placeholder='Nhập bình luận ...'
                        multiline
                        rows={fullScreen?7:5}
                        sx={classes.input}
                        
                        />
                        <Grid item container
                        alignItems='center'
                        justifyContent='space-between'
                        sx={classes.rateWrapper}>
                            <Grid item component={Typography}>
                                Đánh giá của bạn
                            </Grid>
                            <Grid item
                            style={{
                                display:'flex',
                                alignItems:'center'
                            }}>
                                <StyledRating
                                    name="post-rate"
                                    defaultValue={0}
                                    getLabelText={(value) => `${value} RateHeart${value !== 1 ? 's' : ''}`}
                                    precision={0.5}
                                    icon={<Favorite fontSize="inherit" />}
                                    emptyIcon={<Favorite fontSize="inherit" />}
                                />
                            </Grid>
                        </Grid>
                        <Grid  item
                        component={Button}
                        fullWidth
                        type='submit'
                        sx={classes.postButton}>
                            {loading?'Đang tải':'Đăng bình luận'}
                        </Grid>
                    </Grid>
                </DialogContent>
                <LoadingWrapper active={loading}>
                    <LinearProgress/>
                </LoadingWrapper>
            </Dialog>

        </Fragment>
    )
}

export default PostComment
