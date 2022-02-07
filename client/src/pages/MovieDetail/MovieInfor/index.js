
import React from 'react'
import { useStyles, Wrapper } from './style'
import Summary from './Summary';
import AllPhoto from './AllPhoto';
import Comments from './Comments';
import { Paper, Tab, Tabs } from '@mui/material';
const movieInfo = {
    'Ngày công chiếu':'15/09/2021',
    'Đạo diễn':'Adam elim',
    'Diễn viên':'Kyle Chandler, Rebecca Hall, Eiza González, Millie Bobby Brown',
    types:['Hành động','Viễn tưởng'],
    'Studio':'com2us',
    'Định dạng':'2D/Digital',
    'content':'Điển trai, độc thân và kỹ lưỡng trong lối sống, Chai là hình tượng “sugar daddy” điển hình bên ngoài ấm áp bên trong trưởng thành. Cuộc gặp gỡ vô cùng bất ngờ và định mệnh với cô gái 9x - Whan đã khiến ông chú thập niên 90s thoát ra khỏi cuộc sống đơn sắc trước đây khi cả hai chợt nhận ra rằng, trái tim họ đang ngày càng loạn nhịp vì nhau.'
    
}

function a11yProps(index) {
    return {
      id: `movie-detail-wrapped-tab-${index}`,
      'aria-controls': `movie-detail-tabpanel-${index}`,
    };
}
function MovieInfor() {
    const [selectedTab, setSelectedTab] = React.useState(0);
    //style material UI
    const classes = useStyles()

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        <Wrapper className = 'movie-infor'>
            <Paper elevation={0} sx={classes.paper}>
                <Tabs
                value={selectedTab}
                onChange={handleChange}
                TabIndicatorProps={{sx:classes.indicator}}
                sx={classes.movieTabs}
                >
                    <Tab label="Tổng quan" {...a11yProps(0)}/>
                    <Tab label="hình ảnh" {...a11yProps(1)}/>
                    <Tab label="Bình luận" {...a11yProps(3)}/>
                </Tabs>
                <Summary index={0} value={selectedTab} data={movieInfo}/>
                <AllPhoto index={1} value={selectedTab}/>
                <Comments index={2} value={selectedTab} />
            </Paper>
        </Wrapper>
    )
}

export default MovieInfor
