import React from 'react';
import {Box} from '@mui/material'
import {styled} from '@mui/material/styles';
const useStyles = (theme)=>({
    root:{
        width:'100%',
        position:'relative',
        paddingBottom:'66.47%',
        opacity:{xs:1,sm:0.6},
        '&:hover':{
            opacity:'1'
        }
    },
})

const Img = styled('img')(({theme})=>({
    position:'absolute',
    width:'100%',
    height:'100%',
    objectFit:'cover',
    backgroundColor:'#fff',
    padding:5
}))

function PartnerItem({item}) {
    const classes = useStyles()
    return (
        <Box sx={classes.root}>
            <Img sx={classes.img}
             src={`/assets/images/partner/p${item}.jpg`} alt="partner" />
        </Box>
    )
}

export default PartnerItem
