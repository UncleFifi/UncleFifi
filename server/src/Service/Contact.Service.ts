import { IApiResponse } from './../@types/API'
import { IContact } from './../models/Contact'

export interface IContactService {
    sendForm(): Promise<IApiResponse>
    FormPost(contactInfo: IContact):void
}


export class ContactService implements IContactService {

    public FormPost(contactInfo: IContact) {
        console.log(`name: ${contactInfo.name}`)
        console.log(`email: ${contactInfo.email}`)
        console.log(`subject: ${contactInfo.subject}`)
        console.log(`message: ${contactInfo.message}`)
    }

    public sendForm(): Promise<IApiResponse> {

        return new Promise<IApiResponse>((resolve, reject) => {
            let response: IApiResponse
            response = {
                isGood: true,
                message: "Hello world",
                errors: new Array<string>('none')
            }
            resolve(response)
        })
    }
}