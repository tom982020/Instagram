const mongoose = require('mongoose')
require('dotenv').config()
const mongo = process.env.MONGODB_URL
mongoose.connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=> console.log('Connect Database Success'))
.catch((err)=> console.log(err))