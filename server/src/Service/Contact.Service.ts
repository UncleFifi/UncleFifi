import { IApiResponse } from './../@types/API'

export interface IContactService {
    sendForm(): Promise<IApiResponse>
}


export class ContactService implements IContactService {

    public sendForm(): Promise<IApiResponse> {

        return new Promise<IApiResponse>((resolve, reject) => {
            let response: IApiResponse
            response = {
                isGood: true,
                message: "Hello world",
                errors: new Array<string>()
            }
            resolve(response)
        })


    }
}