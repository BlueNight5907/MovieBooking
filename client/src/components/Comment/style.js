
export const useStyles = ()=>({
    root:{
        display:'flex',
        gap:5+'px',
        position:'relative'
    },
    avt:{
        flexShrink:0
    },
    content:{
        
        background:'#eee',
        borderRadius:10+'px',
        padding:'4px 10px 10px 10px',
        
    },
    username:{
        textTransform:'capitalize'
    },
    userInfor:{
        marginBottom:10+'px',
        '& p':{
            fontWeight:500,
            fontSize:14
        },
        '& span':{
            fontSize:10,
            padding:'2px 15px',
            background:'rgb(4,106,240)',
            color:'#fff',
            borderRadius:5+'px'
        },
        
    },
    moreBtn:{
        position:'absolute',
        right:5,
        top:5,
        width:30,
        height:30
    },
    like:{
        display:'flex',
        alignItems:'center',
        gap:5+'px',
        fontSize:14,
        '&.active':{
            color:'rgb(32,59,254)'
        },
        cursor:'pointer'
    },
    likeWrapper:{
        display:'flex',
        alignItems:'center',
        gap:10+'px',
        height:30,
        '& span':{
            fontSize:14,
            fontWeight:600,
            color:'rgb(32,59,254)'
        },
        '& > .MuiCircularProgress-root':{
            color:'rgb(32,59,254)'
        }
    }
})