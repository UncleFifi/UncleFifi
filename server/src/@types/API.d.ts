export interface IApiResponse {
    message: string
    isGood: boolean
    errors: string[]
}

export type ReadOnlySettings = { 
    readonly port: number
    readonly baseUrl: string
    readonly email: string
    readonly emailPass: string
 }