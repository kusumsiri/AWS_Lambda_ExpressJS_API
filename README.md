# AWS Lambda Express.js API by Serverless Framework
<p>
  <a href="https://www.serverless.com">
    <img src="http://public.serverless.com/badges/v3.svg">
  </a>
</p>
An example that explains and demonstrates how to create a Lambda function based Express API on Amazon Web Services (AWS) using the Serverless-framework

### Introduction
AWS [Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) allows code to run without dealing with servers in the cloud. Visit my [this repository](https://github.com/kusumsiri/AWS_Lambda_Serverless_Framework) for more details and clarifications. This explains how to create an Express.js API that handles all the endpoints (GET, CREATE, PUT & DELETE) inside Express.js.

### Prerequisites
1. [Node.js](https://nodejs.org/en/) installed
2. The [Serverless framework](https://www.serverless.com/framework/docs/getting-started) must be installed
3. Then [AWS credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials) are configured

### Setting up and deploying
Use the following command to clone this repository.

```
git clone https://github.com/kusumsiri/AWS_Lambda_ExpressJS_API.git

cd AWS_Lambda_ExpressJS_API
```
Then use the following command to install relevant node packages. (express & serverless-http)
```
npm install
```
After that use the following command to deploy the Express API
```
serverless deploy
```

Your output will look like below
```
Deploying aws-lambda-expressjs-api to stage dev (us-east-1)

✔ Service deployed to stack aws-lambda-expressjs-api-dev (128s)

endpoint: ANY - https://957qth5u2m.execute-api.us-east-1.amazonaws.com
functions:
  api: dev-lambda-expressjs-api (871 kB)
```
Please note your actual endpoint.

### Testing endpoints
Use a suitable API testing tool to test these endpoints.

There are two GET endpoints. They are '/' and '/list'
Testing the GET '/' endpoint
```
https://957qth5u2m.execute-api.us-east-1.amazonaws.com/
```
Testing the GET '/list' endpoint
```
https://957qth5u2m.execute-api.us-east-1.amazonaws.com/list
```
Testing the POST endpoint
```
https://957qth5u2m.execute-api.us-east-1.amazonaws.com/create
```
Testing the PUT endpoint
```
https://957qth5u2m.execute-api.us-east-1.amazonaws.com/edit
```
Testing the DELETE endpoint
```
https://957qth5u2m.execute-api.us-east-1.amazonaws.com/delete
```
(Please edit the above url accordingly)

### Removing the API
If the API and all other settings need to be removed
```
serverless remove
```
