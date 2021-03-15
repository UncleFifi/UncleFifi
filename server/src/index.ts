import { startExpressServer } from './Express'

// IMPORTS DECLARED HERE
import { configuration } from './envConfig'
import { setRabbitQueuConnectionPool } from './rabbit'
import { Emailer } from './Service/Email.Service'


startExpressServer(configuration.port, setRabbitQueuConnectionPool)