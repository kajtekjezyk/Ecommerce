import React from 'react';
import './homepage.styles.scss';

const homePage = (props) => {
    return (
        <div className="homePage">
            <div className='directoryMenu'>
                <div className='menuItem'>
                    <div className='content'>
                        <h1 className='title'>HATS</h1>
                        <span className='subTitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menuItem'>
                    <div className='content'>
                        <h1 className='title'>JACKETS</h1>
                        <span className='subTitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menuItem'>
                    <div className='content'>
                        <h1 className='title'>WOMENS</h1>
                        <span className='subTitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menuItem'>
                    <div className='content'>
                        <h1 className='title'>MENS</h1>
                        <span className='subTitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menuItem'>
                    <div className='content'>
                        <h1 className='title'>HATS</h1>
                        <span className='subTitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default homePage;