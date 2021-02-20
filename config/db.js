const mongoose = require('mongoose')
const config = require('config')
const dbURI = process.env.MONGODB_URI || config.get('mongoURI')


const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })

    console.log('MongoDB connected')
  } catch (err) {
    console.error(err.message)
    // exit process with failure
    process.exit(1)
  }
}

module.exports = connectDB
