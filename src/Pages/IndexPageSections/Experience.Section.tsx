import React, { FC } from 'react'


export const ExperienceSection: FC = () => {
    return <div className="col m8 offset-m2 s12">
        <div className="card">
            <div className="card-content white-text">
                <span style={{display: "flex"}} className="card-title"><span style={{flex: 1}}>Junior Web Developer | PWC</span> 10/2017 - 04/2019</span>
                <p>• Hosted multiple node and ASP.NET core 2.1 applications using Docker containers.</p>
                <p>• Collaborated with UI lead developer on multiple projects and quickly improved React skills to ensure our team could stay on schedule, working on parts that needed extra help.</p>
                <p>• Collaborated with database lead to create data models (ERDs) and wrote Views, triggers and stored procedures.</p>
            </div>
        </div>

        <div className="card">
            <div className="card-content white-text">
                <span style={{display: "flex"}} className="card-title"><span style={{flex: 1}}>IT Development(Senior Associate) | PWC</span>04/2019 - Current</span>
                <p>• Fixed various bugs in our main in-house accounting application, with over 60k daily sessions.</p>
                <p>• Developed application features for the main global application to address business demands.</p>
                <p>• Wrote clear and effective code that is pushed to development sites after two rounds of code reviews.</p>
            </div>
        </div>

    </div>
}