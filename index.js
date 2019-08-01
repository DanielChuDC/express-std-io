const express = require('express');
const app = express();
const debug = require('debug')('myapp:server');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const { minioFunction } = require('./minio');
const Minio = require('minio');
// Get information about host's operating system
var os = require('os');

// // import agenda
// const Agenda = require('agenda');
// // create connection string for mongo
// const mongoConnectionString = 'mongodb://localhost:27017/data';

// // or override the default collection name:
// let agenda = new Agenda({
//   db: {
//     address: mongoConnectionString,
//     collection: 'jobs',
//     options: { ssl: false },
//     sort: { nextRunAt: 1 }
//   }
// });
// agenda.name(os.hostname + '-' + process.pid);

// import shelljs
let shell = require('shelljs');

// Construct body parser with express
// The two lines tells express to accept both JSON and url encoded values
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  // debug('Server is up and running on port ', port);
});

app.get('/', function(req, res) {
  return res.send('hello from my app express server!');
});

app.get('/app', function(req, res) {
  if (shell.which('git')) {
    shell.exec('git --version');
    return res.send(shell.exec('git --version'));
  } else {
    return res.send(console.log('you do not have git installed.'));
    console.log('you do not have git installed.');
  }
});

app.get('/api', function(req, res) {
  //console.log(req);
  if (!req.body.title || !req.body.command) {
    return res.status(400).send({
      success: 'false',
      message: 'title or command is required'
    });
  } else {
    var version = shell.exec('node --version', { silent: true }).stdout;

    var child = shell.exec('terraform init', { async: true });
    child.stdout.on('data', function(data) {
      console.log(data);
    });

    shell.exec('node --version', function(code, stdout, stderr) {
      console.log('Exit code:', code);
      console.log('Program output:', stdout);
      console.log('Program stderr:', stderr);
    });

    return res.send(shell.exec('terraform init'));
  }

  // return res.status(200).send('nothing is impossible');
});

app.get('/tera', function(req, res) {
  if (shell.which('git')) {
    // shell.exec('terraform --version');
    return res.send(shell.exec('terraform init'));
  } else {
    return res.send(console.log('you do not have terraform installed.'));
    console.log('you do not have terraform installed.');
  }
});

app.get('/min', function(req, res) {
  console.log(minioFunction);
  res.send(minioFunction());
});
