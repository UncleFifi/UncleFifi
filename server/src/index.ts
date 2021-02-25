import { startExpressServer } from './Express'

// IMPORTS DECLARED HERE
import { configuration } from './envConfig'
import { setRabbitQueuConnectionPool } from './rabbit'

// CONSTANTS DECLARED HERE
const Domain = configuration.baseUrl
console.log(`Domain: ${Domain}`)
console.log(`Port: ${configuration.port}`)


startExpressServer(configuration.port, setRabbitQueuConnectionPool)