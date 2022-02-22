import React, {useState, useRef, useEffect} from 'react';
import { useGlobal } from './context';

const Submenu = () => {
    const {isSubmenuOpen, location, page} = useGlobal();

    // using useref so that i can access the submenu container css
    const container = useRef(null)

    // state for the width of my submenu (for the changes to the classnames)
    const [columns, setColumns] = useState('col-2')

    // makes sense to use useEffect here because everytime that location changes i want the submenu to change
    useEffect(() => {
        // .current gives you the literal html tag that you are looking at. with the tag u can .style to change the style (or .text to change the text)
        const submenu = container.current
        // default column state value ????
        setColumns('col-2')
        
        const {center, bottom} = location
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`

        if(page.links.length===3){
            setColumns('col-3')
        }
        if(page.links.length>3){
            setColumns('col-4')
        }

    }, [location, page.links])

    return (
        <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
            {/* page object has already been filtered out when the mouse hovers over the button */}
            <h4>{page.page}</h4>
            {/* we also want to dynamically change the width of the submenu component to the number of links inside it*/}
            <div className={`submenu-center ${columns}`}>{page.links.map((link, index) => <a key={index} href={link.url}>{link.icon}{link.label}</a>)}</div>
        </aside>
    )
}

export default Submenu
