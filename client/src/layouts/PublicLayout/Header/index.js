
import React,{Fragment} from 'react'
import useStyles,{MenuLeft, MenuRight, SearchInput} from './style'
import logo from './logo.png';
import bars from './bars.png';
import NavItem from './NavItem';
import { useState } from 'react';
import { Link, NavLink, useRouteMatch} from 'react-router-dom';
import { AppBar,Box, Avatar, Button, Drawer, Grid, IconButton, List, MenuItem, MenuList, Paper, Toolbar, Typography, ListItemText, Collapse, ListItemAvatar } from '@mui/material';
import { ArrowForwardIos, Close, SearchOutlined, Theaters } from '@mui/icons-material';


const headerMenu = [
    {
        name:'Phim',
        href:'/movies',
        img:'/assets/images/icons/video.svg',
        subMenu:[
            {
                name:'Phim đang chiếu',
                href:'/movies/now'
            },
            {
                name:'Phim sắp chiếu',
                href:'/movies/commingsoon'
            },
            {
                name:'Lịch chiếu phim',
                href:'/movies/showtimes'
            },
        ]
    },
    {
        name:'Pages',
        href:'/pages',
        img:'/assets/images/icons/landing-page.svg',
        subMenu:[
            {
                name:'Blog',
                href:'/movies/now'
            },
            {
                name:'Sự kiện',
                href:'/movies/commingsoon'
            },
            {
                name:'Tìm kiếm',
                href:'/movies/now'
            }
        ]
    },
    {
        name:'Rạp phim',
        href:'/theaters',
        img:'/assets/images/icons/cinema.svg',
    },
    {
        name:'Đồ ăn',
        href:'/foods',
        img:'/assets/images/icons/popcorn.svg',
    }]

const DrawerItem = (props)=>{
    const { data, ...other } = props;
    const [open,setOpen] = useState(false);
    const {url} = useRouteMatch();
    let active = false;
    if(url.split('/')[1] === data.href.split('/')[1]){
        active = true
    }
    const hasSubmenu = data.subMenu?true:false;
    const addHref = ()=>{
        return!hasSubmenu?{to:data.href}:{className:active?'active':''}
    }
    return(
        <li>
            <MenuItem component={hasSubmenu?'div':NavLink} {...addHref()}
            {...other}
            onClick ={()=>{setOpen(open => !open)}}
            style={{gap:15}}>
                <ListItemAvatar style={{
                    minWidth:'unset'
                }}>
                    <Avatar variant='square'
                    style={{
                        width:24,
                        height:24
                    }}
                    src={data.img}/>
                </ListItemAvatar>
                <ListItemText>
                    {data.name}
                </ListItemText>
                {hasSubmenu&&<ArrowForwardIos className={open?'active':''}/>}
            </MenuItem>
            {hasSubmenu&&(
            <Collapse in={open} className='submenu'>
                <List>
                    {data.subMenu.map((e,i)=>(
                        <li key={i}>
                            <MenuItem component={NavLink} to={e.href}>
                                {e.name}
                            </MenuItem>
                        </li>
                    ))}
                </List>
            </Collapse>
            )}
        </li>
    )
}
function Header({user}) {

    const [openSearchType, setOpenSearchType] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)
    const handleSearchType = ()=>{
        setOpenSearchType(state => {return !state})
    }

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
      };
      const handleDrawerClose = () => {
        setOpenDrawer(false);
      };
    
    //classes M-UI
    const classes = useStyles()
    return (
        <Fragment>
            <AppBar position='sticky' color='default'
                sx = {classes.appBar}
            >
                <Toolbar sx={classes.headerToolbar}>

                    
                    <MenuLeft>
                        <img sx={classes.logo} src={logo} alt="Logo" />
                        <List sx={classes.headerLeft}>
                        {headerMenu.map((e,i)=>{
                            return (
                                <NavItem data={e} key={i} />
                            )
                        })}
                        </List>
                    </MenuLeft>


                    <MenuRight>
                        <Grid
                            sx={classes.headerRight}
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            style={{marginRight:10}}
                        >
                            
                            <form
                                style={{
                                    display:'flex',
                                    alignItems:'center',
                                    position:'relative'
                                }}
                            >
                                {openSearchType&&(
                                    <Paper
                                    style={{
                                        position:'absolute',
                                        top:'110%'
                                    }}>
                                        <MenuList>
                                        <MenuItem>Profile</MenuItem>
                                        <MenuItem>My account</MenuItem>
                                        <MenuItem>Logout</MenuItem>
                                        </MenuList>
                                    </Paper>
                                )}
                                
                                <Button onClick={handleSearchType}
                                style={{
                                    height:'40px',
                                    backgroundColor:'#f6f6f6',
                                    textTransform:'capitalize',
                                    borderRadius:'10px 0 0 10px',
                                    minWidth:'unset',
                                    color:'#111111'
                                }}
                                >
                                    Movie
                                    <ArrowForwardIos 
                                    sx={classes.styleDownArrow}
                                    className={
                                        openSearchType===true?['active']:''
                                    }
                                    fontSize='small'/>
                                </Button>
                                <SearchInput type="text" placeholder='Search'/>
                                <Button
                                style={{
                                    height:40,
                                    width:40,
                                    backgroundColor:'black',
                                    borderRadius:'0 10px 10px 0'
                                }}
                                >
                                    <SearchOutlined style={{color:'white'}}/>
                                </Button>
                            </form>
                            
                            
                            {
                                user?
                                (
                                    <Avatar src={'/assets/images/users/u34.jfif'} alt='user' sx={classes.auth}/>
                                ):
                                (
                                    <Button sx={classes.headerButton} component={Link} to='/login'>
                                        Sign in
                                    </Button>
                                )
                                
                            }
                        </Grid>
                        
                        <Button sx={classes.menuButton} onClick={handleDrawerOpen}>
                            <img style={{height:16,width:22}} src={bars} alt="Logo" />
                        </Button>
                    </MenuRight>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor='right'
                open={openDrawer}
                transitionDuration={300}
                PaperProps={{sx:classes.drawerPaper}}
                onClose={handleDrawerClose}
            >
                <Box sx={classes.drawerHeader}>
                    <Typography component='h3' variant='h6'>
                        Movie Pro
                    </Typography>
                    <IconButton
                    style={{
                        position:'absolute',
                        right:8,
                        top:10,
                        color:'#fff'
                    }}
                    onClick={handleDrawerClose}>
                        <Close/>
                    </IconButton>
                </Box>
                <Paper elevation={4} square sx={classes.drawerUser}>
                    <Avatar
                    sx={{
                        flexShrink:0
                    }}
                    src='/assets/images/users/rewards_login.webp'
                    />
                    <Typography>
                        Mở khóa các ưu đãi và lợi ích tuyệt vời
                    </Typography>
                    <Button component={Link} to='/login'>
                        Login / Register 
                    </Button>
                </Paper>

                <MenuList sx={classes.drawerMenu}>
                    <DrawerItem data={{
                        name:'Trang chủ',
                        href:'/',
                        img:'/assets/images/icons/home.svg'
                    }} exact/>
                    {
                        headerMenu.map((e,i)=>(
                            <DrawerItem data={e} key={i}/>
                        ))
                    }
                </MenuList>
                
            </Drawer>
            
        </Fragment>
    )
}

export default Header
/*

        */