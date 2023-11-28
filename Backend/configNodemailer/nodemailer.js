const nodemailer = require("nodemailer")

//creo el transporter para utiulizar en la ruta para enviar gmail
const transporter= nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure: true,
    auth:{
        user:"fitevolution77@gmail.com",
        pass: "aekf psrk itpi bcrx",
    },
})


transporter.verify()
//.then(() => console.log("gmail enviado con exito!"))
.catch((error) => console.error("Error al verificar el transporter:", error));

module.exports= transporter;