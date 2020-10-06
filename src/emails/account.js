const sgMail = require('@sendgrid/mail');
const sengridApiKey = '';
sgMail.setApiKey(process.env.SENGRID_API_KEY);

sgMail.send({
    to: 'ignacio.angrigiani@gmail.com',
    from: 'ignacio.angrigiani@gmail.com',
    subject: 'Probando sengrid',
    text: 'Eso, probando esta api'
}).then((response) => {
    console.log(response);
}).catch( (error) => {
    console.log(error.response.body);
})
