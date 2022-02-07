export const useStyles = ({cardHovered})=>({
    root:{
        width:'100%',
        position:'relative',
        display:{xs:'flex',sm:'block'},
        alignItems:'center'
        
    },
    img:{
        width:{xs:100,sm:'100%'},
        height:{xs:100,sm:200},
        position:'relative',
        '&::before':{
            content:"''",
            display:cardHovered?'inherit':'none',
            position:'absolute',
            width:'100%',
            height:'100%',
            zIndex:2,
            backgroundColor:'rgba(0,0,0,0.3)',
            
        },
        flexShrink:0
    },
    content:{
        padding:{xs:'5px',mb:'10px 5px'},
        '& > h3':{
            fontWeight:600,
            fontSize:18
        },
        flexGrow:{xs:1,mb:'unset'}
    },
    chip:{
        height:28,
        color:'#fff',
        backgroundColor:theme => theme.main.color,
        position:'absolute',
        top:5,
        left:5
    },
    rate:{
        borderRadius:5+'px',
        backgroundColor:'rgba(0,0,0,0.4)',
        flexDirection:'column',

        '& > span':{
            fontSize:5,
            
        },
        position:'absolute',
        top:5,
        right:5,
        display:{xs:'none',mb:'block'}
    },
    play:{
        display:cardHovered?'':'none',
        position:'absolute',
        zIndex:3,
        color:'#fff',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        backgroundColor:'rgba(255,255,255,0.3)',
        '&:hover':{
            backgroundColor:'rgba(255,255,255,0.3)',
        }
        
    },
    movieName:{
        textDecoration:'none',
        color:theme => theme.main.textColor,
        marginBottom:{xs:'unset',sm:10+'px'},
        display:'block',
        '&:hover':{
            color:theme => theme.main.color
        },
        '& > span':{
            fontSize:16,
            fontWeight:600,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        height:{xs:48,sm:'unset'},
    },
    detail:{
        textTransform:'capitalize',
        '&:hover':{
            borderColor:theme => theme.main.color,
            color:theme => theme.main.color
        },
        padding:'5px 10px',
        height:'40px',

    }
    
})