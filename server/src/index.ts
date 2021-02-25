import { startExpressServer } from './Express'
// IMPORTS DECLARED HERE
import { setRabbitQueuConnectionPool } from './rabbit'
// CONSTANTS DECLARED HERE
const Port = typeof process.env.PORT === 'string' && parseInt(process.env.PORT) || 5000

startExpressServer(Port, setRabbitQueuConnectionPool)