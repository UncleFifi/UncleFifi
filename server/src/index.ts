import { startExpressServer } from './Express'
// IMPORTS DECLARED HERE
import { setRabbitQueuConnectionPool } from './rabbit'
// CONSTANTS DECLARED HERE
const Port = typeof process.env.PORT === 'string' && parseInt(process.env.PORT) || 3000


startExpressServer(Port, setRabbitQueuConnectionPool)