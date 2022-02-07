import React, { Fragment } from 'react'
import './style.scss'
function NoMovie() {
    return (
        <Fragment>
        <div className='nomovie_title'>Xin lỗi, nội dung bạn cần tìm tạm thời không tồn tại </div>
        <div className='candles_animation'>
            
            <div className="wrapper">
                
                <div className="candles">
                    <div className="light__wave"></div>
                    <div className="candle1">
                        <div className="candle1__body">
                            <div className="candle1__eyes">
                            <span className="candle1__eyes-one"></span>
                            <span className="candle1__eyes-two"></span>
                            </div>
                            <div className="candle1__mouth"></div>
                        </div>
                        <div className="candle1__stick"></div>
                    </div>
                    
                    <div className="candle2">
                        <div className="candle2__body">
                            <div className="candle2__eyes">
                                <div className="candle2__eyes-one"></div>
                                <div className="candle2__eyes-two"></div>
                            </div>
                        </div>
                        <div className="candle2__stick"></div>
                    </div>
                    <div className="candle2__fire"></div>
                    <div className="sparkles-one"></div>
                    <div className="sparkles-two"></div>
                    <div className="candle__smoke-one"></div>
                    <div className="candle__smoke-two"></div>
                    
                </div>
                <div className="floor">
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default NoMovie
