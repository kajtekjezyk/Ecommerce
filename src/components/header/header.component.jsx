import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.style.scss';

const header = props => {
    return (
        <div className='header'>
            <Link className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className='options'>
                <div className='option'>
                    <Link className='option' to='/shop'>SHOP</Link>
                </div>
                <div className='option'>
                    <Link className='option' to='/shop'>CONTACT</Link>
                </div>
            </div>
            
        </div>
    )
}

export default header;