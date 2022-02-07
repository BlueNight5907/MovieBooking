import { Breadcrumbs, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'
import { Link as RouterLink, Route } from 'react-router-dom';
import {breadcrumbNameMap} from '../../../constants/pathMap'
  
const useStyles = ()=>({
    link:{
        fontSize:16,
        '&:hover':{
            color:theme => theme.main.color,
        },
        textDecoration:'none',
    },
    text:{
        ontSize:16,
        color:theme => theme.main.color
    }
})
const Wrapper = styled('div')(({theme})=>({
    marginTop:20,
    padding:'10px 20px',    
    backgroundColor:'rgba(255,255,255,0.12)',
    borderRadius:'5px 5px 0 0'
}))
const LinkRouter = (props) =>  <Link {...props} component={RouterLink} />;
function Navigation() {
    const classes = useStyles()
    return (
        <Wrapper>
            <Route>
                {({ location }) => {
                const pathnames = location.pathname.split('/').filter((x) => x);

                return (
                    <Breadcrumbs aria-label="breadcrumb" style={{color:'#fff'}}>
                    <LinkRouter sx={classes.link} color="inherit" to="/">
                        Trang chủ
                    </LinkRouter>
                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                        return last ? (
                        <Typography sx={classes.text}  key={to}>
                            {breadcrumbNameMap[to]||pathnames[index]}
                        </Typography>
                        ) : (
                        <LinkRouter sx={classes.link} color="inherit" to={to} key={to}>
                            {breadcrumbNameMap[to]||pathnames[index]}
                        </LinkRouter>
                        );
                    })}
                    </Breadcrumbs>
                );
          }}
        </Route>
        </Wrapper>
    )
}

export default Navigation
