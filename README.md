npx create-react-app my-app --template typescript
cd my-app
npm start
npm install @mui/material @mui/icons-material
npm install @mui/styled-engine @emotion/styled @emotion/react
npm i react-router-dom
npm install -g @aws-amplify/cli
npm install aws-amplify

## amplify settings

$ amplify configure
Follow these steps to set up access to your AWS account:

Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue

Specify the AWS Region
? region: ap-northeast-1
Follow the instructions at
https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli

to complete the user creation in the AWS console
https://console.aws.amazon.com/iamv2/home#/users/create
Press Enter to continue

Enter the access key of the newly created user:
? accessKeyId: **\*\*\*\***\*\*\*\***\*\*\*\***
? secretAccessKey: **\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***
This would update/create the AWS Profile in your local machine
? Profile Name: default

Successfully set up the new user.

## amplifu initialize

$ amplify init

## Create GraphQL API

$ amplify add api
? Select from one of the below mentioned services: GraphQL
? Here is the GraphQL API that we will create. Select a setting to edit or conti
nue Authorization modes: API key (default, expiration time: 7 days from now)
? Choose the default authorization type for the API Amazon Cognito User Pool
Using service: Cognito, provided by: awscloudformation

The current configured provider is Amazon Cognito.

Do you want to use the default authentication and security configuration? Defau
lt configuration
Warning: you will not be able to edit these selections.
How do you want users to be able to sign in? Username
Do you want to configure advanced settings? No, I am done.
✅ Successfully added auth resource amplifydevopsb00f0abe locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

? Configure additional auth types? Yes
? Choose the additional authorization types you want to configure for the API IA
M
? Here is the GraphQL API that we will create. Select a setting to edit or conti
nue Continue
? Choose a schema template: Single object with fields (e.g., “Todo” with ID, nam
e, description)

⚠️ WARNING: Some types do not have authorization rules configured. That means all create, read, update, and delete operations are denied on these types: - Todo
Learn more about "@auth" authorization rules here: https://docs.amplify.aws/cli/graphql/authorization-rules
✅ GraphQL schema compiled successfully.

Edit your schema at /Users/matsuuradaiki/VScode/blogApp/amplify/backend/api/amplifydevops/schema.graphql or place .graphql files in a directory at /Users/matsuuradaiki/VScode/blogApp/amplify/backend/api/amplifydevops/schema
✔ Do you want to edit the schema now? (Y/n) · yes
Could not find selected code editor (Visual Studio Code) on your machine.
? Try opening with system-default editor instead? Yes
✅ Successfully added resource amplifydevops locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

if you edit scheam.graphql you can proceed to the next step

$ amplify push


# amplify authenticater component
https://ui.docs.amplify.aws/react/connected-components/authenticator

