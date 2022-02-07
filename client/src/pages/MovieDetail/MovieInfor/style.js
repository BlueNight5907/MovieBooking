
import { styled } from '@mui/system';
export const useStyles = ()=>({
    indicator: {
        background: "none" // remove MUI indicator
    },
    paper:{
        backgroundColor:'#fff',
    },
    movieTabs:{
        "& button": {
            textTransform:'capitalize',
            backgroundColor:'#f1f1f1',
            fontSize:14,
            height:48,
            fontWeight:500,
            padding: '0 20px', // the size of the border
            transition:'background 0.3s ease-in-out',
            position:'relative',
            overflow:'visible',
        },
        "& button:first-of-type": {
            borderRadius:'5px 0 0 5px'
        },
        "& button:last-child": {
            borderRadius:'0 5px 5px 0'
        },
        "& button:hover": {
            color:'#fff',
            backgroundColor:theme => theme.main.color,
            opacity:1,
            '&:not(:last-child)::before':{
                content:"''",
                width:'2px',
                height:'70%',
                position:'absolute',
                right:'-1px',
                backgroundColor:'#fff',
                zIndex:10
            },
            '&:not(:first-of-type)::after':{
                content:"''",
                width:'2px',
                height:'70%',
                position:'absolute',
                left:'-1px',
                backgroundColor:'#fff',
                zIndex:10
            }
            
        },
        "& button[aria-selected='true']": {
            backgroundColor:theme => theme.main.color,
            color:'#fff'
        }
    }
})
export const Wrapper = styled('section')(({theme})=>({
    padding:'20px 0',
    backgroundColor:'#fff'
}));