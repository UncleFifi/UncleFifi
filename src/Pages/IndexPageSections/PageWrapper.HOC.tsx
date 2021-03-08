import React, { FC } from 'react'

interface IPageWrapperHOC {
    id: string
    supressFlex?: boolean
    className: string
}

export const PageWrapperHOC:FC<IPageWrapperHOC> = ({children, id, supressFlex = false, className}) => {
    // let outerClassName = "fullHeight row"
    // if(supressFlex===false) outerClassName+= " flex alignItemsCenter"
    return <div id={id} className={className}>{children}</div>
}