import { styled } from "@mui/system"

export const useStyle=()=>({
    contactbtn:{
        color:'#fff',
        background:'#333545',
        width:'100%',
        padding:'10px 0',
        borderRadius:'5px',
        textTransform:'uppercase',
        fontSize:'16px',
        border:'1px solid #333545',
        fontWeight:600,
        '&:hover':{
            background:'#fff',
            color:'#333545',
        },
        transition:'all 0.3s ease-in-out'
    },
    box:{
        minHeight:'300px'
    },
    title:{
        color:'rgba(0, 0, 0, 0.87)',
        fontWeight:500,
        '&::after':{
            border:'1px solid rgba(0,0,0,0.3)',
        }
    }
})
export const Wrapper = styled('div')({
    display:'flex',
    flexDirection:'column',
    gap:15,
    position:'sticky',
    top:80
})

export const Background = styled('div')({
    width:'100%',
    position:'relative',
    paddingBottom:'200%',
    borderRadius:5,
    overflow:'hidden',
    '& > img':{
        position:'absolute',
        width:'100%',
        height:'100%',
        objectFit:'cover'
    }
})