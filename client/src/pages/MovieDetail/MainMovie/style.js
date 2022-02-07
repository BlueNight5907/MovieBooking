import { Rating } from "@mui/material";
import { styled } from "@mui/system";

export const useStyles = ()=>({
    paper:{
        padding:{xs:6+'px',md:10+'px'}
    },
    trailerWrapper:{
        paddingLeft:{xs:0,sm:16+'px'},
        paddingRight:{xs:0,sm:16+'px'}
    },
    trailer:{
        width:'100%',
        paddingBottom:{xs:'52.25%',md:'45%'},
        position:'relative',
        '&::before':{
            zIndex:1,
            position:'absolute',
            top:0,
            left:0,
            bottom:0,
            right:0,
            background:'rgba(0,0,0,0.5)',
            content:'""'

        },
    },
    infor:{
        padding:'20px 0'
    },
    movieName:{
        marginLeft:10+'px',
        fontSize:24,
        fontWeight:600

    },
    booking:{   
        backgroundImage: '-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)',
        padding: '11px 24px',
        fontWeight: 600,
        color: '#ffffff',
        textTransform: 'uppercase',
        borderRadius: 25,
        display: 'inline-block'
    },
    icon:{
        color:theme => theme.main.color,
        width:30,
        height:30
    },
    trailerBottom:{
        position:'absolute',
        right:0,
        left:0,
        bottom:0,
        zIndex:2,
        color:'#fff',
        padding:10+'px'
    },
    time:{
        fontSize:{xs:12,sm:15},
    },
    social:{
        width:'unset',
        gap:10+'px'
    },
    socialIcon:{
        width:32,
        height:32,
        cursor:'pointer',
        '&.fb':{
            backgroundColor:'#0063ff'
        },
        '&.twt':{
            backgroundColor:'#009eff'
        },
        '&.utub':{
            backgroundColor:'#ff4444'
        },
        '&.ins':{
            backgroundImage:'linear-gradient(to bottom right, #f50057,#f179d4, #3a48e2)'
        },
    },
    date:{
        marginTop:20+'px',
        '& > p':{
            fontSize:16,
            fontWeight:500,

        },
        '& img':{
            width:30,
            height:30
        }
    }
})


export const StyledRating = styled(Rating)(({theme})=>({
    '& .MuiRating-iconFilled': {
      color: theme.main.color,
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
}));
export const Wrapper = styled('section')(({theme})=>({
    padding:'20px 0',
    background:theme.main.background
}));
export const MovieInforWrapper = styled('div')(({theme})=>({
    background:'#333545',
    color:'#fff',
    marginTop:20
}));

export const Types = styled('ul')(({theme})=>({
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
        margin: theme.spacing(0.2),
    },
    listStyle:'none'
}));