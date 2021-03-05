import React, { FC } from 'react'

interface IPageWrapperHOC {
    id: string
}

export const PageWrapperHOC:FC<IPageWrapperHOC> = ({children, id}) => {
    return <div id={id} className="flex fullHeight row" style={{ alignItems: "center" }}>
        {children}
    </div>
}