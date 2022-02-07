import React from 'react';
import MainFooter from './MainFooter/MainFooter';
import Subscribe from './Subscribe/Subscribe';
import Partner from './Partner/Partner';
function Footer() {
    return (
        <div className='footer'>
            <Partner/>
            <Subscribe/>
            <MainFooter/>
        </div>
    )
}

export default Footer
