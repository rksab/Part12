require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL || 'mongodb://the_username:the_password@localhost:3456/the_database'// process.env.MONGO_URL || undefined 
const REDIS_URL =  process.env.REDIS_URL || 'redis://localhost:6379' // process.env.REDIS_URL || undefined ;//process.env.REDIS_URL || undefined

module.exports = {
  MONGO_URL, //: 'mongodb://the_username:the_password@localhost:3456/the_database',
  REDIS_URL//: '//localhost:6378'
}