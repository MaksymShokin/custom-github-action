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

  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  // 3. Output website url
  const websiteUrl = `http://${bucket}.s3-website.${bucketRegion}.amazonaws.com/`;
  core.setOutput('web-site', websiteUrl);
};

run();
