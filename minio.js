const minioFunction = () => {
  // import minio
  const Minio = require('minio');
  try {
    // Instantiate the minio client with the endpoint
    // and access keys as shown below.
    var minioClient = new Minio.Client({
      endPoint: 'myminio',
      port: 9000,
      useSSL: false,
      accessKey: 'access_key',
      secretKey: 'secret_key'
    });

    // File that needs to be uploaded.
    var file = './README.md';

    // Make a bucket called europetrip.
    minioClient.makeBucket('individualuser', 'singapore', function(err) {
      if (err) return console.log(err);

      console.log('Bucket created successfully in "sng01".');

      var metaData = {
        'Content-Type': 'application/octet-stream',
        'X-Amz-Meta-Testing': 1234,
        example: 5678
      };
      // Using fPutObject API upload your file to the bucket europetrip.
      minioClient.fPutObject('europetrip', 'Readme', file, metaData, function(err, etag) {
        if (err) return console.log(err);
        console.log('File uploaded successfully.');
      });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { minioFunction };
