const mongoose = require("mongoose");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    hash : String,
    salt : String
}, { timestamps : true });

// create a method for setting user password and hashing it
userSchema.methods.setPassword = function(password) {
    // create a salt for the user
    this.salt = crypto.randomBytes(16).toString("hex");

    // hash the user's salt and password with 999 iterations, 16 length and sha512 digest
    this.hash = crypto.pbkdf2Sync(password, this.salt, 999, 64, "sha512").toString ("hex");
}

// create a method for hashing password entered and checking said hash up against the hash stored in the db
userSchema.methods.validPassword = function(password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 999, 64, "sha512").toString("hex");
    return this.hash === hash;
}

// export User to be accesible in other documents
const User = module.exports = mongoose.model("User", userSchema);
