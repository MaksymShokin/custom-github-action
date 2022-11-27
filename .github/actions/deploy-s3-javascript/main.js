const core = require('@actions/core');
const exec = require('@actions/exec');

// extra context object
// const github = require('@actions/github');

const run = () => {
  // 1. Get inputs from action
  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });

  // 2. Upload files
  // AWS CLI is preinstalled of github action runners
  const s3Uri = `s3://${bucket}`;

  //AWSAccessKeyId=AKIA26WI7PSITKW3BDP6
  // AWSSecretKey=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

  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  core.notice('Hello from JavaScript action');
};

run();
