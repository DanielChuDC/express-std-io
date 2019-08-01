# express-std-io

This project demonstrate how express can pass bash script and return output

## Preparation

```bash
npm i express morgan debug multer serve-index --save// added debug ability
npm install body-parser --save //for rest api call
npm install --save-dev nodemon //for auto detect code change
npm install --save-dev supports-color //for color the std output
npm install shelljs --save //for wrapping bash script
npm install --save-dev dotenv //for fetching environment var
npm install mongodb --save //for mongodb client
npm install minio --save //for minio client

npm install agenda --save//for node light weight job scheduler


```

Using with TypeScript

npm install --save-dev @types/minio

See more for

- [body parser](https://www.npmjs.com/package/body-parser)
- [morgan](https://www.npmjs.com/package/morgan)
- [express](https://www.npmjs.com/package/express)
- [multer](https://www.npmjs.com/package/multer)
- [serve-index](https://www.npmjs.com/package/serve-index)
- [debug](https://www.npmjs.com/package/debug)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [support-color](https://www.npmjs.com/package/supports-color)
- [shelljs](https://www.npmjs.com/package/shelljs)
- [mongodb](https://www.npmjs.com/package/minio)
- [minio](https://www.npmjs.com/package/mongodb) OR [minio](https://github.com/minio/minio-js)

* [agenda](https://www.npmjs.com/package/agenda) OR [agenda github](https://github.com/agenda/agenda#agenda-events)

### Add line

`dev": "nodemon ./index.js` and `` into script section in 'package.json'

### Run the project

`npm run dev`

Maybe not using agenda as job scheduler

### About shell js child process

https://documentup.com/shelljs/shelljs

## Connect to mongo and minio

Here we using docker to create [mongo db](https://docs.mongodb.com) and [minio db](https://docs.min.io/docs/minio-quickstart-guide.html)

Run the following command:

```bash
docker pull mongo
docker pull minio/minio
docker run -p 27017:27017 mongo
docker run -d -p 9000:9000 -e MINIO_ACCESS_KEY='access_key' -e MINIO_SECRET_KEY='secret_key' minio/minio server /data
```

### To generate base64 encode sceret

```bash
echo secret_key | base64
=> c2VjcmV0X2tleQo=
echo access_key | base64
=> YWNjZXNzX2tleQo=


```
