# AWS Lambda Express.js API by Serverless Framework
An example that explains and demonstrates how to create a Lambda function based Express API on Amazon Web Services (AWS) using the Serverless-framework

### Introduction
AWS [Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) allows code to run without dealing with servers in the cloud. Visit my [this repository](https://github.com/kusumsiri/AWS_Lambda_Serverless_Framework) for more details and clarifications. This explains how to create an Express.js API that handles all the endpoints inside Express.js.

### Prerequisites
1. The [Serverless framework](https://www.serverless.com/framework/docs/getting-started) must be installed
2. Then [AWS credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials) are configured

### Setting up and deploying
Use the following command to clone this repository.

```
git clone https://github.com/kusumsiri/AWS_Lambda_ExpressJS_API.git
cd AWS_Lambda_Serverless_Framework
```
Then use the following command to deploy it
```
serverless deploy
```
Your output will look like below
```
Deploying lambda-function to stage dev (us-east-1)
✔ Service deployed to stack lambda-function-dev (135s)
endpoint: https://jbzo26rdt3zcpgdv263w4nlziu0zivpr.lambda-url.us-east-1.on.aws/
functions:
  hello: dev-simple-lambda-function (1.6 kB)
```
Copy the endpoint link and access it using any browser.
Or send a curl request
```
curl https://jbzo26rdt3zcpgdv263w4nlziu0zivpr.lambda-url.us-east-.on.aws/
```
(Please edit the above url accordingly)

If the Lambda function and all other settings need to be removed
```
serverless remove
```
