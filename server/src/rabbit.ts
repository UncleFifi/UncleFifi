import { connect, Connection } from 'amqplib'

export function setRabbitQueuConnectionPool() {
    connect('amqp://localhost')
    .then((rabbitConnection: Connection) => {
        console.log('I am connected!')
        rabbitConnection.createChannel().then((channelDetails) => {
            console.log('createChannel is Created!!')
        }).catch((channelError) => {
            console.log('Error in creating the channel')
        })
    }).catch((connectionError) => {
        console.log('I am NOT connected!')
        console.log('CONNECTION ERROR')
    })
}