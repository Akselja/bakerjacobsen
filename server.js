const fs = require("fs");
const path = require("path");
const express = require("express");
const { application } = require("express");
const app = express();
const port = "3000";

app.use(express.static('public'));

app.set("view engine", "ejs");

// sends whatever page is requested
app.get("/", (req, res) => {
    res.render("index", { title: "Hjemmeside - Baker Jacobsen" });
})

app.get("/products", (req, res) => {
    res.render("products");
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/cart", (req, res) => {
    res.render("cart");
})

app.get("/search_results", (req, res) => {
    res.render("search_results");
})

app.get("/index", (req, res) => {
    res.status(301).redirect("/");
})

// sends 404
app.use((req, res) => {
    res.status(404).render("404");
})

// initiates listening
app.listen(port, () => {
    console.log(`app running on port ${port}`);
})