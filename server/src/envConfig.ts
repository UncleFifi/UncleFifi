import Dotenv from 'dotenv'
import { ReadOnlySettings } from './@types/API'

Dotenv.config()


export const configuration:ReadOnlySettings = {
    baseUrl: process.env.BASE_URL ?? 'localhost',
    port: typeof process.env.PORT === 'string' && parseInt(process.env.PORT) || 5000
}