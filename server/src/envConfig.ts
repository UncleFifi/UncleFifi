import Dotenv from 'dotenv'
import { ReadOnlySettings } from './@types/API'

Dotenv.config()

export const configuration:ReadOnlySettings = {
    baseUrl: process.env.BASE_URL ?? 'localhost',
    email: process.env.EMAIL ?? '',
    emailPass: process.env.EMAIL_PASS ?? '',
    port: typeof process.env.PORT === 'string' && parseInt(process.env.PORT) || 5000,
}

console.log(configuration)