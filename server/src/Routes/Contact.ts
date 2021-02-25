import { RouteBase } from './RouteBase'
import ExpressLib from 'express'
import { IContactService, ContactService } from './../Service/Contact.Service'

class ContactRoute extends RouteBase {
    private _contactService: IContactService
    constructor(details: Array<string>) {
        super("contact")
        this._contactService = new ContactService()

        this.registerRoute(details, `/${this.BasePath}`)
        this.Router.get( "/", (req: ExpressLib.Request,res: ExpressLib.Response) => {
            this._contactService.sendForm()
            .then((formResponse) => {
                res.status(200).send(formResponse)
            })
        })
    }
}


export default ContactRoute