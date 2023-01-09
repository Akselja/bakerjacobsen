

const crypto = require("crypto");

function encryptPassword(password) {
    return crypto.createHash("sha256").update(password).digest("hex");
}

const password = "|860P8J.cp=nU,8\9TS?LJNK`N+#";
const encryptedPassword = encryptPassword(password);
console.log(encryptedPassword);

