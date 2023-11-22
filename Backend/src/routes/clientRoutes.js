const { Router } = require("express");


const postClient = require("../controllers/Clients/postClient");
const getAllClient = require("../controllers/Clients/getAllClients");

const clientRoutes= Router();

clientRoutes.post ("/", postClient)
clientRoutes.get("/", getAllClient)     

module.exports= clientRoutes;