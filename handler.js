const express = require("express");
const serverless = require("serverless-http");

const app = express();

//GET /
app.get('/', async (req, res, next) => {
  return res.status(200).json({
    message: 'This is the response to the GET request',
  })
})

//GET /list
app.get('/list', async (req, res, next) => {
  return res.status(200).json({
    message: 'This is the response to the GET /list request',
  })
})

//POST
app.post('/create', async (req, res, next) => {
  return res.status(200).json({
    message: 'This is the response to the POST request at /create',
  })
})

//PUT
app.put('/edit', async (req, res, next) => {
  return res.status(200).json({
    message: 'This is the response to the PUT request at /edit',
  })
})

//DELETE
app.delete('/delete', async (req, res, next) => {
  return res.status(200).json({
    message: 'This is the response to the DELETE request at /delete',
  })
})

app.use(async (req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


module.exports.handler = serverless(app);
