// array of objects (from JSON)
// either contains, isEquals, and notContains 
// as keys of objects (arrays of strings)
// function that returns true if all 3 satisfied
const resMethods = require('./resMethods') 
const resConditions = require('./responses.json')

let lastMessage = null 
let repeat = false 

function stringConditions(message, contains, isEquals, notContains) {
  // if they are undefined don't check 

  // 1. check if message contains all strings 
  if (contains) {
    let isFound = false
    for (let str of contains) {
      if (message.toLowerCase().includes(str.toLowerCase())) {
        isFound = true 
      }
    }
    if (!isFound) return false 
  }

  // 2. check if message is equal to a listed string 
  if (isEquals) {
    let isFound = false 
    for (let str of isEquals) {
      if (message.toLowerCase() == str.toLowerCase()) {
        isFound = true 
      }
    }
    if (!isFound) return false 
  }

  // 3. check if message contains any of the listed 
  if (notContains) {
    for (let str of notContains) {
      if (message.toLowerCase().includes(str.toLowerCase())) {
        return false 
      }
    }
  }

  return true 
}

function respondWith(message, response) {
  const parseResponse = response.split('func- ')
  if (parseResponse.length <= 1) return response 
  else {
    return resMethods[parseResponse[1]](message)
  }
}

// resConditions is imported from json 
function stringResponse(message) {
  // resConditions is an array of conditions 
  // with contains, isEqual and notContains (doesn't have to have them though)
  // first one to return true gets a response 
  if (message == lastMessage && repeat) {
    return "Didn't you say that already?"
  }
  lastMessage = message 

  for (let resp of resConditions) {
    if (stringConditions(message, resp.contains, resp.isEquals, resp.notContains)) {
      return respondWith(message, resp.response)
    } 
  }
  return resMethods.randomAny(message)
}

module.exports = {
  stringConditions, stringResponse
}