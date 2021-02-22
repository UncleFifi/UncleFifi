import React, { FC, useEffect, useState, createRef } from 'react'
import { ScrollSpyBehavior } from './ScrollSpy'

interface PageNodes {
    intro?: HTMLElement,
    contact?: HTMLElement,
    experience?: HTMLElement,
    isDefined: boolean
}

export interface IScrollSpyLink {
    link: HTMLElement
    page: HTMLElement
}


export enum Page {
    intro = 1,
    contact = 2,
    experience = 3
}


export const Navigation:FC = ({ children }) => {

    const introRef = createRef<HTMLDivElement>()
    const contactRef = createRef<HTMLDivElement>()
    const experienceRef = createRef<HTMLDivElement>()



    // We will be able to access the Dom Nodes with this property... 
    // will hold the reference to the HTMLNode...
    const Dom:PageNodes = {
        isDefined: false
    }

    // STATE
    const [scrollZone, setScrollZone] = useState<HTMLElement>()
    const [scrollAreas, setScrollAreas] = useState<Array<IScrollSpyLink>>([])

    // once component Mounts we are able to define the following states...
    useEffect(() => {
        setScrollZone(document.getElementById('scrollElement'))
        setScrollAreas([
            {
                link: introRef.current,
                page: document.getElementById('intro')
            },
            {
                link: contactRef.current,
                page: document.getElementById('contact')
            },
            {
                link: experienceRef.current,
                page: document.getElementById('experience')
            }
        ])

    }, [])

    const getNodes = () => {
        Dom.isDefined = true,
        Dom.intro = document.getElementById('intro')
        Dom.contact = document.getElementById('contact')
        Dom.experience = document.getElementById('experience')
    }


    const onClick = (page: Page) => {
        let element: HTMLDivElement
        if(Dom.isDefined === false) getNodes()
        switch (page) {
            case Page.intro:
                element = Dom.intro as HTMLDivElement
                break;
            case Page.contact:
                element = Dom.contact as HTMLDivElement
                break;
            case Page.experience:
                element = Dom.experience as HTMLDivElement
                break;        
        }
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        })
    }

    const linkClassName = 'pad-15'


    return <ScrollSpyBehavior scrollZone={scrollZone} scrollAreas={scrollAreas}>
        <div id="with-Nav" className="col flexed full-dim">
        <div className="dark-bottom-border white-bg flexed" id="nav-header">
            <div ref={introRef} className={linkClassName} id="intro-link" onClick={() => onClick(Page.intro)}>About</div>
            <div ref={experienceRef} className={linkClassName} id="experience-link" onClick={() => onClick(Page.experience)}>Experience</div>
            <div ref={contactRef} className={linkClassName} id="contact-link" onClick={() => onClick(Page.contact)}>Contact</div>
        </div>{children}</div>
    </ScrollSpyBehavior>
}