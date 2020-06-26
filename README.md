# Simple-Notes
Simple Notes app

Simple Notes app Using Node Express MongoDB

# Steps to Run Locally

1. Clone the repo using `git clone https://github.com/Vijaykrishna23/Simple-Notes.wiki.git`

2. Run `npm install` to install the necessary node modules.  

3. Sign in to [MongoDb](https://www.mongodb.com/)

4. Create a project of `<DATABASE_NAME>`

5. Create a user `<USERNAME>` with password `<PASSWORD>`
)
6. Go to [config.env](config/config.env) and replace `<DATABASE_NAME> , <USERNAME>, <PASSWORD>`

`MONGODB_URI = "mongodb+srv://<USERNAME>:<PASSWORD>@cluster0-3n7gl.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority"`

7. To run in development mode . 

` npm run dev`

**Note: Default PORT is 3000. To change the port go to [app.js](app.js)**

8. To run in production mode

`npm start`


# Using the API
  
To Use the API read the [Home](https://github.com/Vijaykrishna23/Simple-Notes/wiki) Page
