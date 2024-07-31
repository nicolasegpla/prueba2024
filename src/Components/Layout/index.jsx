import Nav from "../Nav"

/* eslint-disable react/prop-types */
function Layout({children}) {
    return(
        <>
        <div className="layout">
            <Nav/>
            {children}
        </div>
            
        </>
    )
}

export default Layout