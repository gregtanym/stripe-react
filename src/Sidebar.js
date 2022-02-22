import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobal } from './context';
import sublinks from './data';

// only to be displayed on the small screen when the navbar button is clicked

const Sidebar = () => {

    const {isSidebarOpen, closeSidebar} = useGlobal();

    return(
        <aside className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
            <div className='sidebar'>
                <button className='close-btn' onClick={closeSidebar}><FaTimes /></button>
                {/* we need to double iterate over sublinks (because of the way data is )*/}
                {/* sublinks is a list of objects. and each object has another list of objects as one of its values which u have to iterate over */}
                <div className='sidebar-links'>
                    {sublinks.map((sublink, index) => <article key={index}>
                       <h4>{sublink.page}</h4>
                       <div className='sidebar-sublinks'>
                            {sublink.links.map((link,index) =>  <a key={index} href={link.url}>
                                {link.icon}{link.label}
                            </a>)}
                       </div>
                    </article>)}
                </div>
            </div>
            
        </aside>
    )
}

export default Sidebar

// instead of if "isSidebarOpen = true, return the sidebar menu else return nothing",
// get in the habit of working with classes instead. if isSidebarOpen = true, set classname to x, else set it to y. where y display will be none or smth