import React, { FC } from 'react'

export const ContactSection: FC = () => {

    const renderForm = () => <div className="row">
        <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input id="first_name" type="text" className="validate" />
                    <label htmlFor="first_name">Name</label>
                </div>
                <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate" />
                    <label htmlFor="last_name">Email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="subject" type="text" className="validate" />
                    <label htmlFor="subject">Subject</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <textarea id="Message" className="materialize-textarea"></textarea>
                    <label htmlFor="Message">Message</label>
                </div>
            </div>

            <a className="waves-effect waves-light btn indigo darken-3">Send</a>

        </form>
    </div>


    return <div className="col m6 offset-m3 s12">
        <div className="card">
            <div className="card-content white-text blue lighten-5">
                {renderForm()}
            </div>
        </div>
    </div>

    {/*
    return <div className="col m6 offset-m3 s12">
        <div className="card">
            <div className="card-content white-text">
                <span className="card-title">Contact</span>
                <p>Need to add form here</p>
            </div>
        </div>
    </div>
    */}
}