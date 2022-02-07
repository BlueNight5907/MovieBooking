import { styled } from "@mui/system"

export const useStyles = ({loading})=>({
    post:{
        padding:'10px 15px',
        gap:10+'px',
        borderRadius:10+'px',
        background:'#ccc'
    },
    postAvt:{
        flexShrink:0
    },
    postInput:{
        flexGrow:1,
        padding:'10px 20px',
        backgroundColor:'#fff',
        borderRadius:30+'px',
        '&:hover':{
            backgroundColor:'#f1f1f1',
        },
        cursor:'pointer'
    },
    dialog:{
        width:'100%',
        position:'relative'
    },
    username:{
        fontWeight:500,
        color:'rgb(5,5,5)'
    },
    input:{
        '& textarea':{
            fontSize:18,
            '&::after':{
                display:'none'
            },
            '&::before':{
                display:'none'
            }
        }
    },
    type:{
        fontSize:12,
        padding:'2px 15px',
        borderRadius:5+'px',
        background:'#d2d2d2'
    },
    rateWrapper:{
        padding:'10px 10px!important',
        border:'0.5px solid rgba(0,0,0,0.2)',
        borderRadius:5+'px',
        color:'rgba(0,0,0,0.5)',
        '& > p':{
            fontWeight:500
        }
    },
    postButton:{
        marginTop:10+'px',
        marginBottom:10+'px',
        background:'rgb(45, 136, 255)',
        color:'#fff',
        textTransform:'unset',
        '&:hover, &:focus':{
            background:'rgb(45, 136, 255)',
        }
    },
})

export const LoadingWrapper = styled('div',{
    shouldForwardProp: prop => prop !== 'active'
})(({theme, active})=>({
    display: active===true?'block':'none',
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    background:'rgba(255,255,255,0.7)'
}))