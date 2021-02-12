import React, { FC, useEffect, useState } from 'react'
import { IScrollSpyLink } from './Navigation'
import { debounce } from 'lodash'
import { createDebouncer } from './../Util/debounce'

interface IScrollSpyBehaviorProps {
    scrollAreas: Array<IScrollSpyLink>
    scrollZone: HTMLElement
}



export const ScrollSpyBehavior:FC<IScrollSpyBehaviorProps> = ({children, scrollAreas, scrollZone}) => {

    interface IViewStat {
        InView: boolean
        distance: number
        linkElement: HTMLElement
    }

    const debouncer = createDebouncer()
    function spyDebounced(){
        debouncer(spyListener, 300)
    }

    const [eventListenerAdded, addEventListener] = useState(false)
    let activeNode: HTMLElement
    

    useEffect(() => {
        return () => {
            // Dynamically Cleaning up the Garbage here!
            if(eventListenerAdded===true) {
                scrollZone.removeEventListener('scroll', spyDebounced)
            }
        }
    }, 
    [])

    const getInViewStats = (linkItem: IScrollSpyLink): IViewStat => {
        const rect = linkItem.page.getBoundingClientRect();
        const diff = window.innerHeight - rect.bottom
        return {
            InView: rect.top >= 0 && rect.bottom <= window.innerHeight,
            distance: Math.abs(diff),
            linkElement: linkItem.link
        }
    }


    function spyListener() {
        // let cur = new Date()
        const scrollAreasStats: Array<IViewStat> = scrollAreas.map(getInViewStats)
        const smallestDistance = Math.min(...scrollAreasStats.map(x => x.distance))
        const shortestNode = scrollAreasStats.find(x => x.distance === smallestDistance)
        if(activeNode !== shortestNode.linkElement) {
            // means we need to change this bitch...
            activeNode = shortestNode.linkElement
            // would remove the class active from all links...
            scrollAreas.forEach(n => n.link.classList.remove("active"))
            // would add it to the one link
            activeNode.classList.add("active")
            // Remove the CSSClass from all nodes
            // Give CSSClass to active Node
        }
    }

    // This code is going to make sure we are able to add the EventListener and we are going to do this after we have the prop
    // Code makes sure we only do this once!
    if(
        eventListenerAdded===false // how I control only running once!
        && scrollZone 
        && Array.isArray(scrollAreas) 
        && scrollAreas.length > 0
    ) {
        // need to make sure we only do this once!
        addEventListener(true)
        // scrollZone.addEventListener('scroll', debounce(spyListener, 300))
        scrollZone.addEventListener('scroll', spyDebounced)
        // makes it so that we highlight onload...
        spyListener()
    }

    return <>{children}</>
}