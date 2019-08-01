// const MongoClient = require('mongodb').MongoClient;

// module.exports = function(agenda) {
//   agenda.define('archive ride', function(job, done) {
//     // Connect to the db
//     MongoClient.connect('mongodb://localhost:27017/data', function(err, db) {
//       if (!err) {
//         // If no error then I query and update my database
//         db.collection('rides').findOneAndUpdate(
//           { _id: job.attrs.data.rideId },
//           { $set: { status: 'expired' } },
//           function(err) {
//             if (!err) {
//               done();
//             }
//           }
//         );
//       }
//       if (err) {
//         console.log(err);
//         done();
//       }
//     });
//   });
// };
