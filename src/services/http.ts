import Axios, { AxiosPromise } from 'axios'
import SettingsService from './Settings'

class Http {
    public baseURL: string
    constructor() {
        this.baseURL = SettingsService.baseUrl
    }

    get<T>(url: string): AxiosPromise<T> {
        return Axios.get<T>(this.baseURL+url)
    }

    formPost<T>(url: string, data: any): AxiosPromise<T> {
        const URL = this.baseURL+"/"+url
        return Axios.post<T>(URL, data)
    }

}

export default new Http()