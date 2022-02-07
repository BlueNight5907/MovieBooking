import React from 'react'
import {  ListItem,  ListItemText, MenuItem, MenuList, Paper, Typography } from '@mui/material';
import { NavLink,Link } from 'react-router-dom';
import { styled } from '@mui/system';
const useStyles =() => ({
    root: {
        cursor:'pointer',
        height:'100%',
        '&.active':{
            borderBottom:'2px solid #fff',
        },
        borderBottom:'2px solid transparent',
        borderTop:'2px solid transparent',
    },
    typography: {
      padding:theme => theme.spacing(2),
    },
    dropdownMenu:{
        position:'absolute',
        width:'100%',
        zIndex:100,
        top:'150%',
        display:'block',
        visibility:'hidden',
        opacity:0,
        left:'0',
        backgroundColor:'rgba(255,255,255,0.9)',
        borderBottom:theme => '5px solid '+theme.main.color,
        paddingLeft:{xs:'28px',lg:'50px'},
        paddingRight:{xs:'28px',lg:'50px'},
        transition:'all 0.3s ease-in-out',
        '& > ul > li':{
            transition:'padding-left 0.3s ease-in-out',
            '&:hover':{
                color:theme => theme.main.color
            },
            '& a':{
                textDecoration:'none',
                color:'inherit',
            }
        }
    }
  });
const MenuItemWrapper = styled('li')(({theme})=>({
    '&:hover > .dropdown-submenu':{
        visibility:'visible',
        opacity:1,
        top:'100%'
    }
}))
const ListItemLink = (props)=>{
    const { to, name,children, ...other } = props;
    return(
        <MenuItemWrapper>
            <ListItem button component={NavLink}
            activeClassName='active'
            to={to} {...other}>
                <ListItemText>
                    {name}
                </ListItemText>
            </ListItem>
            {children}
        </MenuItemWrapper>
    )
}

function NavItem({data}) {
    const hasSubmenu = data.subMenu?true:false
    const classes = useStyles();
    return (
        <ListItemLink sx={classes.root} name={data.name}
        to={data.href}
        >
            {hasSubmenu&&(
                <Paper  sx={classes.dropdownMenu} className='dropdown-submenu' elevation={2} square>
                    <MenuList>
                    {
                        data.subMenu.map(({name,href},i)=>{
                            return(
                                <MenuItem disableRipple key={i}>
                                    <Typography component={Link} to={href} variant="inherit">{name}</Typography>
                                </MenuItem>
                            )
                        })
                    }
                    </MenuList>
                </Paper>
            )}
        </ListItemLink>
    );
}

export default NavItem
