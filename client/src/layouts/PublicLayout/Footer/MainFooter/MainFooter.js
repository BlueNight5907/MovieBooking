
import React from 'react';
import FooterItem from './FooterItem';
import { footer } from '../../../../mockData/footer';
import { Avatar, Container, Grid, Paper, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
const useStyles = ()=>({
    root:{
        padding:'64px 0',
        backgroundColor:'#111111'
    },
    contactIcon:{
        border:'0.5px solid white',
        backgroundColor:'transparent',
        '&:hover':{
            backgroundColor:'#fff'
        },
        '&.facebook':{
            '&:hover':{
                color:'#0063ff',
                border:'0.5px solid #0063ff',
            }
        },
        '&.youtube':{
            '&:hover':{
                color:theme => theme.main.color,
                border:theme => '0.5px solid '+theme.main.color,
            }
        },
        '&.twitter':{
            '&:hover':{
                color:'#009eff',
                border:'0.5px solid #009eff'
            }
        },
        '&.instagram':{
            '&:hover':{
                backgroundImage: 'linear-gradient(to bottom right, red,#e66465, #9198e5)',
                color:'white',
                border:theme => '0.5px solid '+theme.main.color
            }
        }
    },
    footerBottomLeft:{
        justifyContent:{xs:'center',sm:'flex-start'},
    },
    footerBottomRight:{
        justifyContent:{xs:'center',sm:'flex-end'}
    },
})
function MainFooter() {
    const classes=useStyles()
    return (
        <section className='main-footer'>
            <Paper  square elevation={0} sx={classes.root}>
                <Container>
                    <Grid container>
                        
                        {footer.map((e,i)=>(
                            <Grid item xs={12} md={6} lg={3} key={i}>
                                <FooterItem data={e}/>
                            </Grid>
                        ))}


                        <Grid item xs={12} md={6} lg={3}>
                            <FooterItem data={{
                                name:'Ứng dụng tiện lợi dành cho người yêu điện ảnh'
                            }} special/>
                        </Grid>

                        <Grid item xs={12} sm={7}
                        container
                        sx={classes.footerBottomLeft}>
                            <Typography variant="body1" style={{color:'white'}} gutterBottom>
                                Copyright 2020-2021 <span style={{color:'#ff4444'}}>Movie Pro</span> . All rights reserved - Design by <span style={{color:'#ff4444'}}>Webstrot</span>
                            </Typography>
                        </Grid>
                        <Grid item container 
                        sx={classes.footerBottomRight} 
                        style={{gap:10}} xs={12} sm={5}>
                            <Avatar
                            sx={classes.contactIcon}
                            className='facebook'
                            variant="rounded">
                                <Facebook/>
                            </Avatar>
                            <Avatar
                            sx={classes.contactIcon}
                            className='youtube'
                            variant="rounded">
                                <YouTube/>
                            </Avatar>
                            <Avatar
                            sx={classes.contactIcon}
                            className='twitter'
                            variant="rounded">
                                <Twitter/>
                            </Avatar>
                            <Avatar
                            sx={classes.contactIcon}
                            className='instagram'
                            variant="rounded">
                                <Instagram/>
                            </Avatar>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </section>
    )
}

export default MainFooter
