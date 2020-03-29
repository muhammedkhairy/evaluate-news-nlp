const express = require('express');
const cors = require('cors');
const bodyParser =require('body-parser');
const path = require('path');
const port = 3000;
const AYLIENTextAPI = require('aylien_textapi');
require('dotenv').config();

const app = express();

//setup middlewares
app.use(cors()); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//serve static files (css,js)
app.use(express.static('dist'));

//create simple GET request to open html page
app.get('/', (request, response) => {
  response.sendFile (path.resolve('dist', 'index.html'));
});

//setting up our server
app.listen(port, ()=> {
  console.log('Server is running');
  console.log(`Server is listening on port: ${port}`);
});

//create route for sentiment Analysis
app.post('/sentiment_analysis', (request, response) => {
  //console.log(request.body.textInput);
  //initiate textapi SDK
  const textapi = new AYLIENTextAPI({
    application_id : process.env.API_ID,
    application_key : process.env.API_KEY
  });

  //use sentiment Analysis
  textapi.sentiment({
    'url': request.body.textInput,
    'mode': 'document'
  }, function(err, resp) {
    if (err === null) {
      //console.log(res);
      response.send(resp);
    }
  });
})