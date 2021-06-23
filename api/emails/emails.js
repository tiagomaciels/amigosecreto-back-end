const nodemailer = require("nodemailer");

async function enviaEmail(pessoa) {
    const contaTeste = await nodemailer.createTestAccount();

    for (i = 0; i < pessoa.length; i++ ) {

      const transportador = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'shane.nolan@ethereal.email',
          pass: '6WPHZBuuZYVzXN4uK9'
      }
      });

      const info = await transportador.sendMail({
        from: '"Amigo Secreto" <noreply@amigosecreto.com.br>',
        to: pessoa[i].email,
        subject: 'Amigo Secreto',
        text: `Olá! Este é seu amigo secreto ${pessoa[i].nome_amigoSecreto}`,
        html: `<h1>Olá!</h1> <p>Este é seu amigo secreto:</p> ${pessoa[i].nome_amigoSecreto}`
      });

      
    //   console.log('URL: ' + nodemailer.getTestMessageUrl(info));
    }

  }

  module.exports = { enviaEmail }
