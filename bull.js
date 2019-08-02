const Queue = require('bull');

var t_plan_Queue = new Queue('terraform plan');
var t_apply_Queue = new Queue('terraform apply');
var t_destroy_Queue = new Queue('terraform destroy');
var t_state_Queue = new Queue('terraform state');

module.exports = function bullinit() {
  console.log('bullinit initialized');
  var t_init_Queue = new Queue('terraform init');
  t_init_Queue.process.process(function(job, done) {
    // job.data contains the custom data passed when the job was created
    // job.id contains id of this job.

    // transcode video asynchronously and report progress
    job.progress(42);
    // call done when finished
    done();

    // or give a error if error
    done(new Error('error transcoding'));

    // If the job throws an unhandled exception it is also handled correctly
    throw new Error('some unexpected error');
  });
};
