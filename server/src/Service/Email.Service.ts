import { createTransport, Transporter, SendMailOptions, SentMessageInfo } from 'nodemailer'
import { configuration } from '../envConfig'
export class Emailer {
    private transporter: Transporter
    private email: string
    private password: string
    constructor() {
        this.email = configuration.email
        this.password = configuration.emailPass
        this.transporter = createTransport({
            service: 'gmail',
            auth: {
                user: this.email,
                pass: this.password
            }
        })
    }

    public sendEmail(subject: string, html: string) {
        if(this.email.length === 0 && this.password.length === 0) {
            console.log('email and email password must be provided, please add this to config')
            throw "Authentication error"
        }
        const options: SendMailOptions = {
            from: this.email,
            to: this.email,
            subject: subject,
            html: html
        }
        this.transporter.sendMail(options, function callBack(error, information: SentMessageInfo) {
            if(error) {
                console.log('error error error error error error')
                console.log(error)
                console.log('error error error error error error')
            } else {
                if(information && information.response) 
                    console.log(information.response)
            }
        })
    }
}