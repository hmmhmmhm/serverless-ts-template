# 🚧 Severless Typescript Template

> Serverless + Typescript Template

An easy-to-use Serverless template!

-   Allowed to use typescript in serverless.js!

![Serverless Is Awesome GIF](https://media.vlpt.us/images/jeffyoun/post/52df101a-88e2-4152-8f74-579d0abaaae6/serverless-components.gif)

## 📥 Installation

### Template Download & Install
```bash
git clone https://github.com/hmmhmmhm/serverless-ts-template
cd serverless-ts-template
npm install
```

### Install Serverless
```
npm install -g serverless
```



## 📜 Configulation

### 🚀 Create Hosting Service

- Create Lambda in AWS
  - (Recommended to read before the start)
    - [What is the Lambda [ENG]](https://aws.amazon.com/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/)
    - [What is the Lambda [KOR]](https://aws.amazon.com/ko/getting-started/projects/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/)
  - https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html

#### 👩‍💻 Config Serverless

> You must need to setup before deploy action using to `serverless config` command. and must correctly set the **provider** config in **"serverless.yml"**

- [ENG Guide](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
- [KOR Guide](https://velog.io/@jeffyoun/Serverless-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9C-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0#aws%EC%97%90%EC%84%9C-%EA%B6%8C%ED%95%9C-%EC%84%A4%EC%A0%95)

### 📦 Config Template

- You must change the handler names in every files.
  - Open up **"handler.ts"** and **"serverless.yml"** files.
  - Fix "yourFunctionName" to actual Lambda Function names



## 📔 Command

-   npm test (or npm start)

    > Run the development local serveless server. This command creates a path accessible through HTTP.

-   npm run deploy

    > Deploy the file to the physical server. (like a AWS)

## License

MIT Licensed.
