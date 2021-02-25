export interface IApiResponse {
    message: string
    isGood: boolean
    errors: string[]
}

export type ReadOnlySettings = { 
    readonly port: number
    readonly baseUrl: string
 }