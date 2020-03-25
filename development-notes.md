
# Add Amplify
amplify init

Output:
```
Scanning for plugins...
Plugin scan successful
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project ropc-web
? Enter a name for the environment test       
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm.cmd run-script build  
? Start Command: npm.cmd run-script start 
Using default provider  awscloudformation 

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default
/ Initializing project in the cloud...

CREATE_IN_PROGRESS DeploymentBucket             AWS::S3::Bucket            Tue Mar 10 2020 19:33:06 GMT-0500 (Central Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS AuthRole                     AWS::IAM::Role             Tue Mar 10 2020 19:33:05 GMT-0500 (Central Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS UnauthRole                   AWS::IAM::Role             Tue Mar 10 2020 19:33:05 GMT-0500 (Central Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS AuthRole                     AWS::IAM::Role             Tue Mar 10 2020 19:33:05 GMT-0500 (Central Daylight Time)
CREATE_IN_PROGRESS DeploymentBucket             AWS::S3::Bucket            Tue Mar 10 2020 19:33:05 GMT-0500 (Central Daylight Time)
CREATE_IN_PROGRESS UnauthRole                   AWS::IAM::Role             Tue Mar 10 2020 19:33:05 GMT-0500 (Central Daylight Time)
CREATE_IN_PROGRESS ropc-web-test-20200310193301 AWS::CloudFormation::Stack Tue Mar 10 2020 19:33:01 GMT-0500 (Central Daylight Time) User Initiated
- Initializing project in the cloud...

CREATE_COMPLETE UnauthRole AWS::IAM::Role Tue Mar 10 2020 19:33:17 GMT-0500 (Central Daylight Time)
CREATE_COMPLETE AuthRole   AWS::IAM::Role Tue Mar 10 2020 19:33:17 GMT-0500 (Central Daylight Time)
\ Initializing project in the cloud...

CREATE_COMPLETE ropc-web-test-20200310193301 AWS::CloudFormation::Stack Tue Mar 10 2020 19:33:29 GMT-0500 (Central Daylight Time)   
CREATE_COMPLETE DeploymentBucket             AWS::S3::Bucket            Tue Mar 10 2020 19:33:26 GMT-0500 (Central Daylight Time)   
√ Successfully created initial AWS cloud resources for deployments.
√ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify <category> add" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in 
the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```

# Add auth

```
amplify add auth
```

Output:
```
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito. 

 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.
Successfully added resource ropcwebc44edae6 locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in 
the cloud
```

# Push

```
amplify push
```

Output:
```
Scanning for plugins...
Plugin scan successful

Amplify CLI uses Lambda backed custom resources with CloudFormation to manage part of your backend resources.
In response to the Lambda Runtime support deprecation schedule
https://docs.aws.amazon.com/lambda/latest/dg/runtime-support-policy.html
Nodejs runtime need to be updated from nodejs8.10  to nodejs10.x in the following template files:
C:\Users\adam\ropc-web\amplify\backend\auth\ropcwebc44edae6\ropcwebc44edae6-cloudformation-template.yml

Please test the changes in a test environment before pushing these changes to production. There might be a need to update your Lambda function source code due to the NodeJS runtime update. Please take a look at https://aws-amplify.github.io/docs/cli/lambda-node-version-update for more information

? Confirm to update the NodeJS runtime version to 10.x Yes

NodeJS runtime version updated successfully to 10.x in all the CloudFormation templates.
Make sure the template changes are pushed to the cloud by "amplify push"
√ Successfully pulled backend environment test from the cloud.

Current Environment: test

| Category | Resource name   | Operation | Provider plugin   |
| -------- | --------------- | --------- | ----------------- |
| Auth     | ropcwebc44edae6 | Create    | awscloudformation |
? Are you sure you want to continue? Yes
/ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS authropcwebc44edae6          AWS::CloudFormation::Stack Tue Mar 10 2020 19:41:33 GMT-0500 (Central Daylight Time)
UPDATE_IN_PROGRESS ropc-web-test-20200310193301 AWS::CloudFormation::Stack Tue Mar 10 2020 19:41:28 GMT-0500 (Central Daylight Time) User Initiated
| Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS authropcwebc44edae6 AWS::CloudFormation::Stack Tue Mar 10 2020 19:41:34 GMT-0500 (Central Daylight Time) Resource creation Initiated
/ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS ropc-web-test-20200310193301-authropcwebc44edae6-WSISZK8JGG5R AWS::CloudFormation::Stack Tue Mar 10 2020 19:41:34 GMT-0500 (Central Daylight Time) User Initiated
\ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionRole AWS::IAM::Role Tue Mar 10 2020 19:41:36 GMT-0500 (Central Daylight Time) Resource 
creation Initiated
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionRole AWS::IAM::Role Tue Mar 10 2020 19:41:35 GMT-0500 (Central Daylight Time)

- Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS SNSRole AWS::IAM::Role Tue Mar 10 2020 19:41:42 GMT-0500 (Central Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS SNSRole AWS::IAM::Role Tue Mar 10 2020 19:41:42 GMT-0500 (Central Daylight Time)
/ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UpdateRolesWithIDPFunctionRole AWS::IAM::Role Tue Mar 10 2020 19:41:49 GMT-0500 (Central Daylight Time) 
| Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE SNSRole AWS::IAM::Role Tue Mar 10 2020 19:41:55 GMT-0500 (Central Daylight Time) 
\ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UserPool AWS::Cognito::UserPool Tue Mar 10 2020 19:42:04 GMT-0500 (Central Daylight Time)

CREATE_IN_PROGRESS UserPool AWS::Cognito::UserPool Tue Mar 10 2020 19:42:03 GMT-0500 (Central Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS UserPool AWS::Cognito::UserPool Tue Mar 10 2020 19:42:00 GMT-0500 (Central Daylight Time)

/ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientWeb AWS::Cognito::UserPoolClient Tue Mar 10 2020 19:42:07 GMT-0500 (Central Daylight Time)
CREATE_IN_PROGRESS UserPoolClient    AWS::Cognito::UserPoolClient Tue Mar 10 2020 19:42:07 GMT-0500 (Central Daylight Time)
- Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UserPoolClient    AWS::Cognito::UserPoolClient Tue Mar 10 2020 19:42:10 GMT-0500 (Central Daylight Time)

CREATE_IN_PROGRESS UserPoolClient    AWS::Cognito::UserPoolClient Tue Mar 10 2020 19:42:10 GMT-0500 (Central Daylight Time) Resource creation Initiated
CREATE_COMPLETE    UserPoolClientWeb AWS::Cognito::UserPoolClient Tue Mar 10 2020 19:42:10 GMT-0500 (Central Daylight Time)

CREATE_IN_PROGRESS UserPoolClientWeb AWS::Cognito::UserPoolClient Tue Mar 10 2020 19:42:09 GMT-0500 (Central Daylight Time) Resource creation Initiated
/ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientRole AWS::IAM::Role Tue Mar 10 2020 19:42:14 GMT-0500 (Central Daylight Time) 
/ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientRole AWS::IAM::Role Tue Mar 10 2020 19:42:15 GMT-0500 (Central Daylight Time) Resource creation Initiated
/ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientRole AWS::IAM::Role Tue Mar 10 2020 19:42:27 GMT-0500 (Central Daylight Time) 
\ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UserPoolClientLambda AWS::Lambda::Function Tue Mar 10 2020 19:42:32 GMT-0500 (Central Daylight Time)

CREATE_IN_PROGRESS UserPoolClientLambda AWS::Lambda::Function Tue Mar 10 2020 19:42:32 GMT-0500 (Central Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS UserPoolClientLambda AWS::Lambda::Function Tue Mar 10 2020 19:42:31 GMT-0500 (Central Daylight Time)

- Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLambdaPolicy AWS::IAM::Policy Tue Mar 10 2020 19:42:37 GMT-0500 (Central Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS UserPoolClientLambdaPolicy AWS::IAM::Policy Tue Mar 10 2020 19:42:36 GMT-0500 (Central Daylight Time)

- Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientLambdaPolicy AWS::IAM::Policy Tue Mar 10 2020 19:42:49 GMT-0500 (Central Daylight Time) 
/ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLogPolicy AWS::IAM::Policy Tue Mar 10 2020 19:42:53 GMT-0500 (Central Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS UserPoolClientLogPolicy AWS::IAM::Policy Tue Mar 10 2020 19:42:52 GMT-0500 (Central Daylight Time)

\ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientInputs    Custom::LambdaCallout Tue Mar 10 2020 19:43:08 GMT-0500 (Central Daylight Time) 
CREATE_COMPLETE    UserPoolClientLogPolicy AWS::IAM::Policy      Tue Mar 10 2020 19:43:05 GMT-0500 (Central Daylight Time)
/ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UserPoolClientInputs Custom::LambdaCallout Tue Mar 10 2020 19:43:13 GMT-0500 (Central Daylight Time)

CREATE_IN_PROGRESS UserPoolClientInputs Custom::LambdaCallout Tue Mar 10 2020 19:43:12 GMT-0500 (Central Daylight Time) Resource creation Initiated
| Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS IdentityPool AWS::Cognito::IdentityPool Tue Mar 10 2020 19:43:18 GMT-0500 (Central Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS IdentityPool AWS::Cognito::IdentityPool Tue Mar 10 2020 19:43:17 GMT-0500 (Central Daylight Time)

- Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS IdentityPoolRoleMap AWS::Cognito::IdentityPoolRoleAttachment Tue Mar 10 2020 19:43:23 GMT-0500 (Central Daylight 
Time)
CREATE_COMPLETE    IdentityPool        AWS::Cognito::IdentityPool               Tue Mar 10 2020 19:43:19 GMT-0500 (Central Daylight 
Time) 
- Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE authropcwebc44edae6 AWS::CloudFormation::Stack Tue Mar 10 2020 19:43:28 GMT-0500 (Central Daylight Time)
| Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UpdateRolesWithIDPFunction AWS::Lambda::Function Tue Mar 10 2020 19:43:32 GMT-0500 (Central Daylight Time)       

CREATE_IN_PROGRESS UpdateRolesWithIDPFunction AWS::Lambda::Function Tue Mar 10 2020 19:43:31 GMT-0500 (Central Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdateRolesWithIDPFunction AWS::Lambda::Function Tue Mar 10 2020 19:43:30 GMT-0500 (Central Daylight Time)       

\ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Tue Mar 10 2020 19:43:38 GMT-0500 (Central Daylight Time)
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Tue Mar 10 2020 19:43:37 GMT-0500 (Central Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Tue Mar 10 2020 19:43:34 GMT-0500 (Central Daylight Time)
/ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE                     ropc-web-test-20200310193301 AWS::CloudFormation::Stack Tue Mar 10 2020 19:43:41 GMT-0500 (Central Daylight Time) 
UPDATE_COMPLETE_CLEANUP_IN_PROGRESS ropc-web-test-20200310193301 AWS::CloudFormation::Stack Tue Mar 10 2020 19:43:40 GMT-0500 (Central Daylight Time)
√ All resources are updated in the cloud
```

Adding hosting for the React front end. In this case I specified Continuous 
deployment, hooked it up to my Github project and initiated a deployment. Now
after each push to master it will build my app and deploy it from my master
branch.

```
adam@COBRA MINGW64 ~/ropc-web (master)
$ amplify add hosting
? Select the plugin module to execute Hosting with Amplify Console (Managed hosting with custom domains, Continuous deployment)
? Choose a type Continuous deployment (Git-based deployments)
? Continuous deployment is configured in the Amplify Console. Please hit enter once you connect your repository
Amplify hosting urls:
┌──────────────┬──────────────────────────────────────────────┐
│ FrontEnd Env │ Domain                                       │
├──────────────┼──────────────────────────────────────────────┤
│ master       │ https://master.d3739sn8qs7trl.amplifyapp.com │
└──────────────┴──────────────────────────────────────────────┘
```

Developing the UI
I want to use Material UI for the presentation https://material-ui.com

I started by adding a wrapper for the app in App.js

```javascript
<Container maxWidth="lg">

</Container>
```

Then I added a tab navigation at the top, components for the top level content, and the Reach Router components to handle the routing

```javascript
import { Router } from '@reach/router'
import { Link } from '@reach/router'

import Home from 'ropc/Home'
import Calendar from 'ropc/Calendar'
import About from 'ropc/About'
import Education from 'ropc/Education'

import { Container } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

      <Tabs value={value} onChange={(e, val) => setValue(val)}>
        <Tab label="Home" index={0} to="/" component={Link} />
        <Tab label="About" index={1} to="/about" component={Link} />
        <Tab label="Calendar" index={1} to="/calendar" component={Link} />
        <Tab label="Education" index={3} to="/education" component={Link} />
      </Tabs>
      Current User: {user.attributes ? user.attributes.email : "Please Login"}
      <button onClick={signOut}>Log Out</button>
      <Router>
        <Home path='/'/>
        <About path='/about'/>
        <Calendar path='/calendar'/>
        <Education path='/education'/>
      </Router>
```