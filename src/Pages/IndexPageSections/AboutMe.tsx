import React, { FC, useEffect } from 'react'


export const AboutMeSection: FC = () => {

    const config = {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                // "color": "#000000",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                /*
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                */
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }

    useEffect(() => {
        window.particlesJS("particles-js", config)
    },
        [])

    return <div className="fullDim relative flex" style={{alignItems: "center"}}>
        <div className="fullDim absolute" id="particles-js"></div>
        <div className="col m6 offset-m3 s12">
            <div className="card">
                <div className="card-content white-text">
                    <p className="flow-text">Results-oriented web developer with a problem-solving mindset and experience in developing features for large global applications. </p>
                    <p className="flow-text">Extensive experience in both front and back end tech stacks, as well as working on cross-functional teams. </p>
                    <p className="flow-text">Adept at creating clear and concise code both independently and on a team. </p>
                    <p className="flow-text">Strong communication and ability to learn quickly.</p>
                </div>
            </div>
        </div>
    </div>
}