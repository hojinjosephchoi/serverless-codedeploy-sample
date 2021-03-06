import * as aws from 'aws-sdk';
const codedeploy = new aws.CodeDeploy({apiVersion: '2014-10-06'});

export async function handler(event, context) {
  const deploymentId = event.DeploymentId;
  const lifecycleEventHookExecutionId = event.LifecycleEventHookExecutionId;

  console.log('We are running some integration tests before we start shifting traffic...');

  const params = {
    deploymentId,
    lifecycleEventHookExecutionId,
    status: 'Succeeded' // status can be 'Succeeded' or 'Failed'
  };

  try {
    await codedeploy.putLifecycleEventHookExecutionStatus(params).promise();
    return 'Validation test succeeded';
  } catch (error) {
    throw new Error('Validation test failed');
  }
  
}