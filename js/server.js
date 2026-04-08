const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Config transporter (exemple Gmail)
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "omarzinane223@gmail.com",
      pass: "OmarCasa@2030", // mot de passe d’application Gmail
    },
  });

  let mailOptions = {
    from: email,
    to: "omarzinane223@gmail.com",
    subject: subject,
    text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.send("❌ Erreur lors de l’envoi");
    } else {
      res.send("✅ Message envoyé avec succès !");
    }
  });
});

app.listen(3000, () => {
  console.log("Serveur démarré sur http://localhost:3000");
});
