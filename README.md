# rest.ts 😴
![](https://img.shields.io/badge/TypeScript-S?style=flat-square&logo=typescript&logoColor=white&color=3178C6) ![](https://img.shields.io/badge/MongoDB-S?style=flat-square&logo=mongodb&logoColor=white&color=47A248) ![](https://img.shields.io/badge/Express-S?style=flat-square&logo=express&logoColor=white&color=000000)

___A REST API MVC template for Typescript + Node + Express + Mongo.___


#### The Design Pattern 🏛

This template uses a kind of __MVC__ (_Model-View-Controller_) architecture. So basically you have Models _(created at models/interfaces folder)_, and Controllers that handle requests and display a certain _View_ _(in this case a certain HTTP response)_.

#### Dependencies 👾

- [TypeScript](http://typescriptlang.org/)
    - To make our JavaScript code statically typed so our code is less susceptible to errors and bugs.
- [Express](http://expressjs.com)
    - Our server and HTTP Request Handler.
- [Mongoose](https://mongoosejs.com/docs/)
    - Our alternative client to MongoDB databases.
- [Dotenv](https://www.npmjs.com/package/dotenv)
    - A package to hide our secrets in environment variables.

#### The file structure 🗄

```bash
📦rest.ts
 ┣ 📂controllers            # Insert here your controllers/handlers for CRUD HTTP_ Requests...
 ┃ ┗ 📜todo.ts              # Sample file with CRUD Operations...
 ┣ 📂interfaces             # Interfaces with the basic API properties, simplified...
 ┃ ┗ 📜todo.ts              # Sample file of an interface...
 ┣ 📂models                 # Folder that contains the files to generate a model in MongoDB to create a Schema...
 ┃ ┗ 📜todo.ts  
 ┣ 📂node_modules           # NodeJS Modules/Dependencies
 ┣ 📜.env                   # Create this file and generate the Key: DB_HOST with your database connection as a VALUE:_Your MongoDB Connection Secret URL_...
 ┣ 📜.gitignore
 ┣ 📜Client.rest            # Testing the API using REST Client extension in VSCode...
 ┣ 📜LICENSE
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜server.ts              # Main server file, it serves as uses routes created in the controllers folder...
 ┗ 📜tsconfig.json
```

#### How to get started 🏁

- Clone this repository:

`dev@machine git clone https://github.com/joaoofreitas/rest.ts.git`

- Install all the dependencies:

`dev@machine npm install`

- Create a _.env_ file:

`dev@machine touch .env`

- Edit the _.env_ file and insert the following environment variable _(changing the value to your MongoDB connection string)_:

`DB_HOST=YOUR_MONGODB_CONNECTION_URL`

- Run and test this template:

`dev@machine npm start`


#### LICENSE 📜

MIT License

Copyright (c) 2021 João Freitas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


