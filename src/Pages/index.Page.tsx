import React, { FC, useEffect } from 'react'
import FormActions from './../services/FormAction'
import { Navigation } from './../Components/Navigation'
import { PageWrapperHOC } from './IndexPageSections/PageWrapper.HOC'
import { AboutMeSection } from './IndexPageSections/AboutMe.Section'
import { ExperienceSection } from './IndexPageSections/Experience.Section'
import { TechSection } from './IndexPageSections/Technology.Section'
import { ContactSection } from './IndexPageSections/Contact.Section'
import { ResumeSection } from './IndexPageSections/Resume.Section'
const AllSections = ['About','Experience', 'Technology', 'Contact', 'Resume']
type SectionMap = {[key: string]: HTMLDivElement}


export const HomePage:FC = ({}) => {

    const Sections:SectionMap = {}

    const sectionClicked = (selection: string) => {
        let element: HTMLDivElement = Sections[selection]
        if(element && typeof element.scrollIntoView === 'function') {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            })
        } else {
            alert('binding error')
        }

    }


    useEffect(function onLoad() {
        AllSections.forEach(section => {
            Sections[section] = document.getElementById(section) as HTMLDivElement
        })
    }
        /*
        const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
        prefersColorScheme.addEventListener('change', changeFunction)
            return () => {
                prefersColorScheme.removeEventListener('change', changeFunction)
            }
        }
        */
        ,
    [])

    const commonClassName = "fullHeight row flex alignItemsCenter"

    return <Navigation sections={AllSections} onNavClick={sectionClicked}>
        <PageWrapperHOC id="About" className={commonClassName}>
            <AboutMeSection/>
        </PageWrapperHOC>
        <PageWrapperHOC id="Experience" className={commonClassName}>
            <ExperienceSection/>
        </PageWrapperHOC>
        <PageWrapperHOC id="Technology" className={commonClassName}>
            <TechSection/>
        </PageWrapperHOC>
        <PageWrapperHOC id="Contact" className={commonClassName}>
            <ContactSection/>
        </PageWrapperHOC>
        <PageWrapperHOC id="Resume" supressFlex={true} className="fullHeight flex centered flex centered">
            <ResumeSection/>
        </PageWrapperHOC>
    </Navigation>
}