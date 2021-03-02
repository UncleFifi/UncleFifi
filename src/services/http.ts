import Axios, { AxiosRequestConfig, AxiosPromise } from 'axios'
import SettingsService from './Settings'

class Http {
    private config: AxiosRequestConfig = {}
    constructor() {
        this.config.baseURL = SettingsService.baseUrl
    }

    get<T>(url: string): AxiosPromise<T> {
        this.config.method = "GET"
        return Axios.get<T>(url, this.config)
    }

}

export default new Http()