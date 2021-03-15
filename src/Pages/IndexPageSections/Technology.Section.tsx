import React, { FC } from 'react'


export const TechSection: FC = () => {

    const techList = [
        'AngularJs', 'React', 'Stencil JS',
        'SQL', 'Mongo Db', 'SASS/CSS',
        'Redux', 'Javascript', 'Typescript',
        'NodeJS', 'ASP NET', 'nginx'
    ]

    const renderCell = (t: string) => <div key={t} className="center">{t}</div>



    return <div className="col m8 offset-m2 s12">
        <div className="card">
            <div className="card-content white-text">
                <span className="card-title center">Technology</span>
                <div className="flex flex-static wrap tech">
                    {techList.map(renderCell)}
                </div>
            </div>
        </div>
    </div>
}