# steam-bot-practice

## Summary 

I just wanted to try making a Steam bot that responds to chat messages, using the npm package steam-user. I got the idea from the youtube video: [https://youtu.be/CD5xCUxTobI](https://youtu.be/CD5xCUxTobI) 

## Dependencies 

  * steam-user 
  * dotenv 
  
  There are other dependencies that I used from npm, but did not implement in my chat bot. 
  
## How to use 

To run the bot, first create a .env file with a valid Steam USERNAME and PASSWORD as .env variables. 

Then, use either:

  * npm start
  * node bot.js 
  
When it runs in the terminal, it will probably ask you for a Steamguard key, if it's your first time logging in from that computer/location. After that it should say it successfully logged in. Then, the console should detect when chat messages are sent to this Steam user. 

## File Structure 

  * bot.js has my main SteamUser object from the steam-user package. It also has the event listeners. 
  * resController.js has some methods I wrote for determining how I want to respond to certain messages. 
  * responses.json has an array of objects with the following keys:
    * response - a string explaining how to respond. If the string starts with "func- [function name]" then resController will try to find a function with that name, imported from resMethods. If it is a plain string, the response in Steam chat is simply that string.
    * contains - an array of strings. resController will determine this to be false if none of the strings are contained in the message 
    * isEquals - an array of strings. resController will determine this to be false if none of the strings match the message 
    * notContains - an array of strings. resController will determine this to be true if none of the strings are in the message 
  * resMethods.js - responses.json can ask a method to be called from this file (to return one of many random responses that require Javascript to run, for example) 
  
The files are structured so that, to add new possible responses and phrase recognition, one may first try adding entries to the responses.json file first before having to try writing in resMethods.js. The files bot.js and resController.js should not need to be altered unless there is unavailable functionality desired.
