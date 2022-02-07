import { v4 as uuidv4 } from 'uuid'
export const moviesCarosel =[
    {
        src:'/assets/images/movies/s1.jpg'
    },
    {
        src:'/assets/images/movies/s2.jpg'
    },
    {
        src:'/assets/images/movies/s3.jpg'
    },
    {
        src:'/assets/images/movies/s4.jpg'
    },
    {
        src:'/assets/images/movies/s5.jpg'
    },
    {
        src:'/assets/images/movies/s6.jpg'
    }
]
export const moviesTabs =[
    {
        src:'/assets/images/movies/s1.jpg'
    },
    {
        src:'/assets/images/movies/s2.jpg'
    },
    {
        src:'/assets/images/movies/s3.jpg'
    },
    {
        src:'/assets/images/movies/s4.jpg'
    },
    {
        src:'/assets/images/movies/s5.jpg'
    },
    {
        src:'/assets/images/movies/s6.jpg'
    },
    {
        src:'/assets/images/movies/s7.jpg'
    },
    {
        src:'/assets/images/movies/s8.jpg'
    },
    {
        src:'/assets/images/movies/s9.jpg'
    },
    {
        src:'/assets/images/movies/s10.jpg'
    },
    {
        src:'/assets/images/movies/s11.jpg'
    },
    {
        src:'/assets/images/movies/s12.jpg'
    }
]
export const trendingStoies = [
    {
        img:'/assets/images/blog/md1.png',
        title:'Immediately following the events of Justice League, Arthur Curry,',
        href:'/',
        date: new Date().getTime()
    },
    {
        img:'/assets/images/blog/md2.png',
        title:"Here's Proof That the Hype Is Real for James",
        href:'/',
        date: new Date().getTime()
    },
    {
        img:'/assets/images/blog/md3.jpg',
        title:" While Aquaman finds himself at crossroads with these questions, closer to home a known foe tries to dethrone him",
        href:'/',
        date: new Date().getTime()
    }
]

const getRandom = (max)=>{
    return Math.floor(Math.random()*max)
}

export const showtimes = [
    {
        date:new Date(2021,new Date().getMonth(),new Date().getDate(),0,0,0,0),
        theaters:[
            {
                name:'Movie Pro Quận 7',
                message:'Có thể hủy đặt vé',
                tags:{
                    hasDiscount:true,
                    isVip:true,
                    is3D:true,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận Phú Nhuận',
                message:'Có thể hủy đặt vé',
                tags:{
                    hasDiscount:false,
                    isVip:false,
                    is3D:false,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận 1',
                tags:{
                    hasDiscount:true,
                    isVip:false,
                    is3D:true,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận Thủ Đức',
                message:'Có thể hủy đặt vé',
                tags:{
                    hasDiscount:false,
                    isVip:true,
                    is3D:true,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận Bình Thạnh',
                message:'Có nhiều ưu đãi',
                tags:{
                    hasDiscount:true,
                    isVip:true,
                    is3D:true,
                    hasPopcorn:false
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            }
        ]
    },
    {
        date:new Date(2021,new Date().getMonth(),new Date().getDate()+1,0,0,0,0),
        theaters:[
            {
                name:'Movie Pro Quận 7',
                message:'Có thể hủy đặt vé',
                tags:{
                    hasDiscount:true,
                    isVip:true,
                    is3D:true,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận Phú Nhuận',
                message:'Có thể hủy đặt vé',
                tags:{
                    hasDiscount:false,
                    isVip:false,
                    is3D:false,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận 1',
                tags:{
                    hasDiscount:true,
                    isVip:false,
                    is3D:true,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận Thủ Đức',
                message:'Có thể hủy đặt vé',
                tags:{
                    hasDiscount:false,
                    isVip:true,
                    is3D:true,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận Bình Thạnh',
                message:'Có nhiều ưu đãi',
                tags:{
                    hasDiscount:true,
                    isVip:true,
                    is3D:true,
                    hasPopcorn:false
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            }
        ]
    },
    {
        date:new Date(2021,new Date().getMonth(),new Date().getDate()+2,0,0,0,0),
        theaters:[
            {
                name:'Movie Pro Quận 7',
                message:'Có thể hủy đặt vé',
                tags:{
                    hasDiscount:true,
                    isVip:true,
                    is3D:true,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận Phú Nhuận',
                message:'Có thể hủy đặt vé',
                tags:{
                    hasDiscount:false,
                    isVip:false,
                    is3D:false,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận 1',
                tags:{
                    hasDiscount:true,
                    isVip:false,
                    is3D:true,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận Thủ Đức',
                message:'Có thể hủy đặt vé',
                tags:{
                    hasDiscount:false,
                    isVip:true,
                    is3D:true,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận Bình Thạnh',
                message:'Có nhiều ưu đãi',
                tags:{
                    hasDiscount:true,
                    isVip:true,
                    is3D:true,
                    hasPopcorn:false
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            }
        ]
    },
    {
        date:new Date(2021,new Date().getMonth(),new Date().getDate()+3,0,0,0,0),
        theaters:[
            {
                name:'Movie Pro Quận 7',
                message:'Có thể hủy đặt vé',
                tags:{
                    hasDiscount:true,
                    isVip:true,
                    is3D:true,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận Phú Nhuận',
                message:'Có thể hủy đặt vé',
                tags:{
                    hasDiscount:false,
                    isVip:false,
                    is3D:false,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận 1',
                tags:{
                    hasDiscount:true,
                    isVip:false,
                    is3D:true,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận Thủ Đức',
                message:'Có thể hủy đặt vé',
                tags:{
                    hasDiscount:false,
                    isVip:true,
                    is3D:true,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận Bình Thạnh',
                message:'Có nhiều ưu đãi',
                tags:{
                    hasDiscount:true,
                    isVip:true,
                    is3D:true,
                    hasPopcorn:false
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            }
        ]
    },
    {
        date:new Date(2021,new Date().getMonth(),new Date().getDate()+4,0,0,0,0),
        theaters:[
            {
                name:'Movie Pro Quận 7',
                message:'Có thể hủy đặt vé',
                tags:{
                    hasDiscount:true,
                    isVip:true,
                    is3D:true,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận Phú Nhuận',
                message:'Có thể hủy đặt vé',
                tags:{
                    hasDiscount:false,
                    isVip:false,
                    is3D:false,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận 1',
                tags:{
                    hasDiscount:true,
                    isVip:false,
                    is3D:true,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận Thủ Đức',
                message:'Có thể hủy đặt vé',
                tags:{
                    hasDiscount:false,
                    isVip:true,
                    is3D:true,
                    hasPopcorn:true
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            },
            {
                name:'Movie Pro Quận Bình Thạnh',
                message:'Có nhiều ưu đãi',
                tags:{
                    hasDiscount:true,
                    isVip:true,
                    is3D:true,
                    hasPopcorn:false
                },
                showtime:[
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                    {
                        id:uuidv4(),
                        time:new Date(2021,8,17,getRandom(24),getRandom(60),getRandom(60),0),
                        room:getRandom(6)+1,
                        full:false
                    },
                ]
            }
        ]
    },
]