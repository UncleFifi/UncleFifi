import React, { FC, useEffect, createRef } from 'react'
import { config } from './../Assets/particleJs.config'
import { Link } from "react-router-dom"
import FormActions from './../services/FormAction'
// import { Page } from './../Components/Navigation'
// import DownloadDocument from './../Assets/Doge.png'

export const HomePage:FC = ({}) => {

    const expericeTech = [
		'Typescript',
		'React',
		'Angular',
		'NodeJs',
		'SQL Server',
		'MongoDb',
		'Docker',
		'Web Components',
		'IIS',
		'NginX',
		'Authentication/OAuth2.0'
    ]

    const scrollElement = createRef<HTMLDivElement>()

    const part1 = createRef<HTMLDivElement>()
    const part2 = createRef<HTMLDivElement>()
    const part3 = createRef<HTMLDivElement>()

    /*
    const getConfig = () => {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        const color = isDarkMode ? "#ffffff" : "#000000"
        config.particles.color.value=color
        config.particles.line_linked.color=color
        return config
    }

    const changeFunction = () => {
        window.particlesJS("particles-js", config)
    }
    */

    useEffect(function onLoad() {
            window.particlesJS("particles-js", config)
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


    const wrapClassName = "flexed flex-vertical-center col title full-dim row"
    const cardClassName = "col contact-wrapper l6 offset-l3 offset-s0 s12" 


    return <div id="scrollElement" ref={scrollElement} className="col flexed stretched" style={{position:"relative", overflow: 'auto'}}>
            <div className="background full-dim stretched" id="particles-js" style={{position:"absolute"}}></div>
            <div className="full-dim">

                <div ref={part1} id="intro" className={wrapClassName}>
                    <div className={cardClassName}>
                        <h1 className="center">Felipe Ferreira</h1>
                        <p className="center">Adding Fun Typography effect here</p>
                    </div>
                </div>


                <div ref={part2} id="experience" className={wrapClassName}>
                    <div className={cardClassName}>
                        <h1 className="centered-text">Experience</h1>
                        <div className="skills-section">
                            {expericeTech.map(tech => <div className="centered-text" key={tech}>{tech}</div>)}
                        </div>
                        {/* <a href={DownloadDocument} download>Download Doge</a> */}
                    </div>
                </div>

                <div ref={part3} id="contact" className={wrapClassName}>
                    <div className={cardClassName}>
                        <h1 className="centered-text">Contact</h1>
                        <div className="fields">
                            <div className="field-wrap flexed">
                                <input className="stretched" type="text" placeholder="name" />

                                <input className="stretched" type="text" placeholder="email" />
                            </div>
                            <div className="field-wrap flexed">
                                <textarea placeholder="Write your message here" cols={2} className="stretched"></textarea>
                            </div>

                            <div className="flexed justify-content-end">
                                <a className="waves-effect waves-light btn primary mr-30 mb-30"><i className="material-icons right">cloud</i>button</a>
                            </div>

                        </div>
                    </div>
                </div>

                <div ref={part2} id="work" className={wrapClassName}>
                    <div className={cardClassName}>
                        <h2 className="center">
                            <Link to="/Amortization">
                                Amortization
                            </Link>
                        </h2>
                        <h2 className="center">
                            <Link to="/EMR">
                                EMR
                            </Link>
                        </h2>
                    </div>
                </div>

            </div>
    </div>
}