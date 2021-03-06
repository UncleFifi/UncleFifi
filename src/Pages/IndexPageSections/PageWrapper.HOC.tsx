import React, { FC } from 'react'

interface IPageWrapperHOC {
    id: string
    supressFlex?: boolean
    additionalClassName?: string
}

export const PageWrapperHOC:FC<IPageWrapperHOC> = ({children, id, supressFlex = false, additionalClassName}) => {
    let outerClassName = "fullHeight row"
    if(supressFlex===false) outerClassName+= " flex alignItemsCenter"
    if(typeof additionalClassName === 'string' && additionalClassName.length > 0) outerClassName+= ` ${additionalClassName}`
    return <div id={id} className={outerClassName}>{children}</div>
}