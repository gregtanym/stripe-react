import React, { useState, useContext } from 'react'
import sublinks from './data';

const AppContext = React.createContext();


// we will wrap our whole app in this AppProvider component
// this is just to make the index.js neater without having to put .provider or value=''

export const AppProvider = ({children}) => {

    // States to be used in the global context
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    // state for the location of the submenu. default value is an empty object
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page: '', links: []})

    // Toggle functions 
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page===text)
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }



    // need to rmb to pass in the children as well as return the children or its not gg to make sense
    // value attribute can only take in one object, so the {{}} is neccesary to put it into just one object
    return <AppContext.Provider value={{
        isSidebarOpen, isSubmenuOpen, location, page, 
        openSidebar, closeSidebar, openSubmenu, closeSubmenu
    }}>{children}</AppContext.Provider>
}

// custom hook 
export const useGlobal = () => {
    return(
        // usecontext hook only retrieves what is in the value attribute of the appcontext.provider, so you must rmb to put wtv in there
        useContext(AppContext)
    )
}


