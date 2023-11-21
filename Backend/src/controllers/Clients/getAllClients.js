const {Client} = require("../../db")



const getAllClient= async(req, res) =>{
    try {

        //recupero todos los datos de la tabla client
        const clients= await Client.findAll();
        const response= clients.data

        res.status(200).json(response)


    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



module.exports = getAllClient;