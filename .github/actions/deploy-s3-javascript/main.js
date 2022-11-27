const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

const run = () => {
  core.notice('Hello from JavaScript action');
};

run();
