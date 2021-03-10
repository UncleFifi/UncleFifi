import { startExpressServer } from './Express'

// IMPORTS DECLARED HERE
import { configuration } from './envConfig'
import { setRabbitQueuConnectionPool } from './rabbit'
import { Emailer } from './Email'


startExpressServer(configuration.port, setRabbitQueuConnectionPool)