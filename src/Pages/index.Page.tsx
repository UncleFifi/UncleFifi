import React, { FC, useEffect } from 'react'
import FormActions from './../services/FormAction'
import { Navigation } from './../Components/Navigation'

import { PageWrapperHOC } from './IndexPageSections/PageWrapper.HOC'

import { AboutMeSection } from './IndexPageSections/AboutMe.Section'
import { ExperienceSection } from './IndexPageSections/Experience.Section'
import { TechSection } from './IndexPageSections/Technology.Section'
import { ContactSection } from './IndexPageSections/Contact.Section'
// import { ResumeSection } from './IndexPageSections/Resume.Section'
import ResumeCard from './IndexPageSections/ResumeCard.Section'

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

        FormActions.test().then((API_RESPONSE) => {
            console.log(API_RESPONSE.data)
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


    return <Navigation sections={AllSections} onNavClick={sectionClicked}>
        <PageWrapperHOC id="About">
            <AboutMeSection/>
        </PageWrapperHOC>
        <PageWrapperHOC id="Experience">
            <ExperienceSection/>
        </PageWrapperHOC>
        <PageWrapperHOC id="Technology">
            <TechSection/>
        </PageWrapperHOC>
        <PageWrapperHOC id="Contact">
            <ContactSection/>
        </PageWrapperHOC>
        <PageWrapperHOC id="Resume" supressFlex={true} additionalClassName="flex justifyContentCenter">
            <ResumeCard/>
        </PageWrapperHOC>
    </Navigation>
}