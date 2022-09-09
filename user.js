const mongoose  = require('mongoose')
const schema    = mongoose.schema

const userSchema  = new schema({
    userid: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    password: {
        type: String
    }
}, {timestamps: true})
 const User = mongoose.model('User', userSchema)
 module.exports = User