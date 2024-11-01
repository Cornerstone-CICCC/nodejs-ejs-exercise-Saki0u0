"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
const hobbies = ["Drawing", "Dancing", "Skydiving"];
//Home
pageRouter.get('/', (req, res) => {
    res.status(200).render("index", { title: "My Webpage", version: 1.0, showInfo: false });
});
//About 
pageRouter.get('/', (req, res) => {
    res.status(200).render("about", { title: "About Us" });
});
//Contact
pageRouter.get('/', (req, res) => {
    res.status(200).render("contact", { title: "Contact" });
});
exports.default = pageRouter;
