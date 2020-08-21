// functions that can be called from the responses.json if given the right directions
module.exports = {
  randomAny(msg) {
    const responses = [
      "I am a bot",
      `I am a bot, you just sent: ${msg}`,
      "Beep boop I am a bot",
      "Hello human, I am a bot",
      "Did not recognize that command",
      "Did not recognize that command, did you mean 'I'm bored' ?"
    ]
    const ind = Math.floor(Math.random() * (responses.length - 0.001))
    
    return responses[ind]
  },
  whatDoing() {
    const responses = [
      "I would draw but I don't have the energy",
      "I'm trying to learn something",
      "I'm just a bot calm down",
      "I'm spinning up my dyno in heroku",
      "I would play Street Fighter but my hands hurt"
    ]
    const ind = Math.floor(Math.random() * (responses.length - 0.001))
    
    return responses[ind]
  },
  boredResponse() {
    const responses = [
      "Get a hobby",
      "Get a jerb",
      "Study moar",
      "Draw? Draw gooder?"
    ]
    const ind = Math.floor(Math.random() * (responses.length - 0.001))
  
    return responses[ind]
  }
}