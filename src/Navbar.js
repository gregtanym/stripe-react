import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobal } from './context';

const Navbar = () => {

    const {openSubmenu, closeSubmenu, openSidebar} = useGlobal();
    const displaySubmenu = (e) => {
        // .textcontent returns the text in the html tags
        const page = e.target.textContent;

        // getBoundingClientRect() returns the dimensions of the target element (very useful for finding pixel widths and lengths of components)
        const tempBtn = e.target.getBoundingClientRect();

        // getting center and bottom of the button to put my submenu
        const center = (tempBtn.left +tempBtn.right)/2
        const bottom = tempBtn.bottom - 3
        
        //pass those parameters into the function so that the function can work with it
        openSubmenu(page, {center, bottom});
    }

    // custom function to handle the closing of the submenu when you hover over the navbar and NOT the buttons
    const handleSubmenu = (e) => {
        // the way to filter out whther the object is a button or not is by looking if it has a class of links inside
        if(!e.target.classList.contains('link-btn')){
            closeSubmenu();
        }
    }

    return (
        <nav className='nav' onMouseOver={handleSubmenu}>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt='stripe' className='nav-logo'/>
                    <button className='btn toggle-btn' onClick={openSidebar}><FaBars/></button>
                </div>
                {/* navbar links */}
                <ul className='nav-links'>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            products
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            developers
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            company
                        </button>
                    </li>
                </ul>
                {/* sign in button */}
                <button className='btn signin-btn'>Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar
