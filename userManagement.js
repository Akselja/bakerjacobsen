const crypto = require("crypto");

function encryptPassword(password) {
    return crypto.createHash("sha256").update(password).digest("hex");
}

const password = "abcd";
const encryptedPassword = encryptPassword(password);
console.log(encryptedPassword);