import { styled } from "@mui/material/styles"

export const useStyles = (theme)=>({
    
})

export const FirstSlideWrapper = styled('div')(({theme})=>({
    position:'relative',
    width:'100%',
    height:'auto',
    overflowX:'hidden',
    background:'url("/assets/images/main_slider.jpg") 50% 0 repeat-y',
    backgroundPosition:'center 0',
    backgroundSize:'cover'
}))

export const SecondSlideWrapper = styled('div')(({theme})=>({
    width:'100%',
    padding:'5px 0',
    overflowX:'hidden',
    backgroundColor:'black'
}))

export const Overlay = styled('div')(({theme})=>({
    position:"absolute",
    top:0,
    left:0,
    right:0,
    bottom:0,
    background:'rgba(0,0,0,0.8)',
    zIndex:0
}))