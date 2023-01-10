const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userdb");
const crypto = require("crypto");
const store = require("store2");
const app = express();
const port = "3000";

app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(express.urlencoded({ extended : true }));

// DB connection
const dbUri = "mongodb+srv://BakerJacobsen:T©D§Çko3íIÞcß¢aûûÈæJÀ¬£ßÁgð@bakerjacobsen.klcpg11.mongodb.net/bakerjacobsenUsers?retryWrites=true&w=majority";
mongoose.set('strictQuery', true);
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(port, () => console.log(`app running on port ${port}`)))
    .catch((err) => console.log(err));

// sends whatever page is requested
app.get("/", (req, res) => {
    res.render("index", { usernameNav : store.get("user")});
})

app.get("/products", (req, res) => {
    res.render("products", { usernameNav : store.get("user")});
})

app.get("/login", (req, res) => {
    res.render("login", { usernameNav : store.get("user")});
})

app.post("/login", (req, res) => {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,50}$/;
    if (regex.test(req.body.PasswordSignup)) {// checks for if the signup password meets requirements (also has a separate function of checking if the user is logging in or signing up)
        const newUser = new User()
        newUser.username = req.body.UsernameSignup;
        newUser.email = req.body.EmailSignup;
        newUser.setPassword(req.body.PasswordSignup);
        console.log(newUser);
        console.log(User.validPassword);
        newUser.save()
            .then((result) => res.send(result))
            .catch((err) => console.log(err));
        store.set("user", newUser.username);
        res.redirect("/")
    } else if (regex.test(req.body.PasswordLogin)) {// same as the comment above but for logging in
        const queriedUser = User.findOne({ users : req.body.UsernameLogin }, function (err, user) {
            console.log(queriedUser.salt);
            if (validPassword(req.body.PasswordLogin, queriedUser.hash, toString(queriedUser.salt))) {
                store.set("user", user.username);
                console.log(user.username);
            } else {
                console.log("hah");
            }
        });
    } else {// this occurs when no passwords meet the requirements, this means that no user can be created, and no logins can be commenced as the passwords cannot match the existing password (as that had standards put on it)
        console.log("prank'd");
    }
})

app.get("/cart", (req, res) => {
    res.render("cart", { usernameNav : store.get("user")});
})

app.get("/index", (req, res) => {
    res.status(301).redirect("/");
})

// sends 404
app.use((req, res) => {
    res.status(404).render("404", { usernameNav : store.get("user")});
})


const validPassword = (password, prehash, presalt) => {
    let hash = crypto.pbkdf2Sync(password, presalt, 999, 64, "sha512").toString("hex");
    return prehash === hash;
}




