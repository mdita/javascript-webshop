var api_key = 'key-6134e0d7f8506d0c32adc4e0896ba3d6';
var domain = 'sandbox6e50aeb53ca94939b1b8b19aa3f157af.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var mailcomposer = require('mailcomposer');
var fs = require('fs');
var path = require('path');
var filepath = path.join(__dirname, 'test.html');

var mihai = fs.readFileSync(filepath);

var mail = mailcomposer({
  from: 'you@samples.mailgun.org',
  to: 'ditamihai@gmail.com',
  subject: 'Test email subject',
  text: 'Test email text',
  html: mihai
});
 
mail.build(function(mailBuildError, message) {
 
    var dataToSend = {
        to: 'ditamihai@gmail.com',
        message: message.toString('ascii')
    };
 
    mailgun.messages().sendMime(dataToSend, function (sendError, body) {
        if (sendError) {
            console.log(sendError);
            return;
        }
    });
});
 
// var data = {
//   from: 'Excited User <me@samples.mailgun.org>',
//   to: 'ditamihai@gmail.com',
//   subject: 'Hello',
//   text: 'Testing some Mailgun awesomness!',
//   attachment: filepath
// };
 
// mailgun.messages().send(data, function (error, body) {
//   console.log(body);
// });

// var data = {
//   from: 'Excited User <me@samples.mailgun.org>',
//   to: 'ditamihai@gmail.com',
//   subject: 'Hello',
//   message: filepath,
//   contentType: 'text/html'
// };

// mailgun.messages().sendMime(data, function (err, body) {
//   console.log(body);
// });