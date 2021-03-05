import React, { FC, useEffect } from 'react'
import M, { ISideNavInstance } from 'materialize-css'


interface INavigationProps {
    onNavClick(selection: string):void
    sections: Array<string>
}


export const Navigation: FC<INavigationProps> = ({children, onNavClick, sections}) => {

    let NavigationObject: ISideNavInstance

    useEffect(() => {
        const elems: NodeListOf<Element> = document.querySelectorAll('.sidenav')
        const options = {}
        NavigationObject = M.Sidenav.init(elems, options)[0]
        return () => {
            NavigationObject.destroy()
        }
    }, 
    [])

    const navigationAction = (section: string) => {
        NavigationObject.close()
        onNavClick(section)
    }

    const getNavigationLinks = (prefix: string, isTransparent=false) => {
        let className = "waves-effect waves-light btn"
        if(isTransparent) className+=" transparent"
        else className+=" indigo darken-3"
        return sections.map((section) => <li key={prefix+"-"+section} onClick={()=> navigationAction(section)}>
            <a className={className}>{section}</a>
        </li>)

    }

    return <div className="page">
        <div className="navigation">
            <nav>
                <div className="nav-wrapper">
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {getNavigationLinks("main", true)}
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                {getNavigationLinks("mobile")}
            </ul>            
        </div>
        <div className="page-content">
            {children}
        </div>
    </div>
}