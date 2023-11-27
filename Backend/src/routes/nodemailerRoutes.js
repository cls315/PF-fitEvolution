const {Router} = require ("express")
const transporter= require("../../configNodemailer/nodemailer")
const nodemailer= Router();

nodemailer.post("/", async (req,res)=>{
    try {
        const { gmail, name } = req.body;
    
        await transporter.sendMail({
          from: "mensaje enviado por <fitevolution77@gmail.com>",
          to: gmail,
          subject: "mensaje de fitEVOLUTION",
          text: "gracias por suscribirte",
          html: `<h1>${name}</h1>`
        });
    
        res.status(200).json({ message: "Correo enviado exitosamente" });
      } catch (error) {
        console.error("Error al enviar el correo:", error.message);
        res.status(500).json({ error: "Error al enviar el correo" });
      }
    });

    module.exports = nodemailer;