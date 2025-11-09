#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CicdAwsStack } from '../lib/cicd-aws-stack';

const app = new cdk.App();
new CicdAwsStack(app, 'CicdAwsStack', {
});