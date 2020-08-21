const SteamUser = require('steam-user')
const client = new SteamUser()
require('dotenv').config()

const resController = require('./resController')

const accountName = process.env.USERNAME 
const password = process.env.PASSWORD 

const logOnOptions = {
  accountName,
  password
}

client.logOn(logOnOptions)

client.on('loggedOn', () => {
  console.log('Successfully logged on.')
})

client.on('friendOrChatMessage', async (senderID, message, room) => {
  // console.log('Friend or Chat Message')
  console.log('sender', senderID)
  // console.log('message', message)
  // console.log('room', room)

  try {
    const response = await resController.stringResponse(message)
    await client.chatMessage(room, response)
  } catch (error) {
    console.log(error)
    console.log('Error when receiving chat message!')
  }
})