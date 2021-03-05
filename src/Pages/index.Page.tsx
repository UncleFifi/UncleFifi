import React, { FC, useEffect } from 'react'
import FormActions from './../services/FormAction'
import { Navigation } from './../Components/Navigation'
import { PageWrapperHOC } from './IndexPageSections/PageWrapper.HOC'
import { AboutMeSection } from './IndexPageSections/AboutMe'
import { ExperienceSection } from './IndexPageSections/ExperiencePageSection'
import { TechSection } from './IndexPageSections/TechnologyPageSection'
import { ContactSection } from './IndexPageSections/ContactPageSection'


const AllSections = ['About','Experience', 'Technology', 'Contact']
type SectionMap = {[key: string]: HTMLDivElement}




export const HomePage:FC = ({}) => {

    const Sections:SectionMap = {}

    // should probably live in a config or something...
    const technologies = [
		{
            tech: 'Typescript',
            order: 0
        },
		{
            tech: 'React',
            order: 1
        },
		{
            tech: 'Angular',
            order: 2
        },
		{
            tech: 'NodeJs',
            order: 3
        },
		{
            tech: 'SQL Server',
            order: 4
        },
		{
            tech: 'MongoDb',
            order: 5
        },
		{
            tech: 'Docker',
            order: 6
        },
		{
            tech: 'Web Components',
            order: 7
        },
		{
            tech: 'IIS',
            order: 8
        },
		{
            tech: 'NginX',
            order: 9
        },
		{
            tech: 'Authentication/OAuth2.0',
            order: 10
        },
    ]

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
    </Navigation>
}