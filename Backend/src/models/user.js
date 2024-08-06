const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    photo:{
        type:String,
    },
    pdf:{
       type:String 
    },
    resume: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    role:{
        type: String,
    },
    company:{
        type: String,
    },
    description:{
        type: String,
    },
    linkedin: {
        type: String,
    },
    facebook: {
        type:String,
    },
    instagram:{
        type:String,
    },
    links: {
        type: Boolean,
        default: true
    },
    resources: {
        type: Boolean,
        default: true
    },
    reviews: {
        type: Boolean,
        default: true
    },
    showfb: {
        type: Boolean,
        default: true
    },
    showinsta: {
        type: Boolean,
        default: true
    },
    showlinkedin: {
        type: Boolean,
        default: true
    },
}, {timestamps: true});


// userSchema.methods.comparePassword = function compare(password) {
//     return bcrypt.compareSync(password, this.password);
// }

userSchema.methods.genJWT = function generate() {
    return jwt.sign({id: this._id, email: this.email}, 'twitter_secret', {
        expiresIn: '1h'
    });
}

const User = mongoose.model('User', userSchema);

module.exports = User;