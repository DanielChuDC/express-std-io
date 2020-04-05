const Bull = require('bull');

// var t_plan_Queue = new Queue('terraform plan');
// var t_apply_Queue = new Queue('terraform apply');
// var t_destroy_Queue = new Queue('terraform destroy');
// var t_state_Queue = new Queue('terraform state');

// import shelljs and uuid
let shell = require('shelljs');
const uuidv4 = require('uuid/v4');

module.exports = function bullinit() {
  console.log('bullinit initialized');

  const myFirstQueue = new Bull('my-first-queue', {
    redis: {
      port: 6379,
      host: '127.0.0.1'
      // password: Config.redis.password
    }
  });

  (async function ad() {
    const job = await myFirstQueue.add({
      clientid: uuidv4()
    });
  })();

  var shellexec = function(done) {
    shell.exec('terraform version');
    // call done as job completed
    done(null, 'the terraform version');
  };

  myFirstQueue.process(async (job, done) => {
    let progress = 0;
    for (i = 0; i < 2; i++) {
      await shellexec(done);
      progress += 1;

      job.progress(progress).catch(err => {
        log.debug({ err }, 'Job progress err');
      });
    }
  });

  // Define a local completed event
  myFirstQueue.on('completed', (job, result) => {
    console.log(`Job completed with result ${result}`);
    // console.log(`Job completed with result ${job.log}`);
  });
};
