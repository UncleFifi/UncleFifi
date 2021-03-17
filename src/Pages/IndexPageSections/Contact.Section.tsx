import React, { FC, useState, useEffect } from 'react'
import FormAction from './../../services/FormAction'
import { HubConnectionBuilder, HubConnection } from "@microsoft/signalr"

export const ContactSection: FC = () => {

    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    let _connection: HubConnection

    useEffect(() => {
        // sending it to the url of the other application...
        _connection = new HubConnectionBuilder()
            .withUrl("https://localhost:5001/hub")
            .withAutomaticReconnect()
            .build()

        _connection.on("messageReceived", (username: string, message: string) => {
          debugger
          console.log(`username: ${username} - message: ${message}`)
        });
   
        
        _connection.start().then(() => {
        }).catch((err) => {
        })

       return() => {
            _connection.stop()
       }
      }, 
      [])
    

    const submitForm = (e: React.MouseEvent) => 
    {
        e.preventDefault()
        // const formData = new FormData(formRef.current)
        const formData = {
            name,
            email,
            subject,
            message
        }
        _connection.invoke('newMessage','name', 'messageInput.value');
        /*
        _connection.send('newMessage', 'user', 'some message').then(() => {
            debugger
        }).catch((err) => {
          debugger
          console.dir(err)
        })
        */

        /*
        FormAction.submitForm(formData).then((apiResponse) => {
            console.log(apiResponse)
        }).catch((error) => {
            console.log(error)
        })
        */
    }

    const renderForm = () => <div className="row">
        <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input id="name" type="text" className="validate" value={name} onChange={(e) => setName(e.target.value)}/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-field col s6">
                    <input id="email" type="text" className="validate"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="email">Email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="subject" type="text" className="validate"  value={subject} onChange={(e) => setSubject(e.target.value)}/>
                    <label htmlFor="subject">Subject</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <textarea id="Message" className="materialize-textarea"  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <label htmlFor="Message">Message</label>
                </div>
            </div>

            {/*<a className="waves-effect waves-light btn indigo darken-3">Send</a>*/}
            <button onClick={submitForm} className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
            </button>
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