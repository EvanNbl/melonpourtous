import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import React from 'react';
import Logo from '../img/logo-sansbg.png';

const Navbar = () => {
    return (
        <div className='maxwidth_navbar'>
            <div className="navbar">
                <div className='logolink_navbar'>
                    <Link to="/">
                        <img className='img_navbar' src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className='divlink_navbar'>
                    <Link to="/" className='link_navbar'>Local</Link>
                    <Link to="/" className='link_navbar'>National</Link>
                    <Link to="/" className='link_navbar'>Actualité</Link>
                    <Link to="/" className='link_navbar'>Reportage</Link>
                    <Link to="/" className='link_navbar'>Culture</Link>
                    <Link to="/" className='link_navbar'>Podcast</Link>
                </div>
                <div className='divlinkaccount_navbar'>
                    <Link className='linkaccount_navbar' to="/">Compte</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;