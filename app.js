const cors = require('cors');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json());

app.listen(PORT, () => {
  console.log('Server Listining on PORT:', PORT);
});

app.get('/status', (request, response) => {
  const status = {
    Status: 'Running',
  };
  response.send(status);
});

app.post('/:operation', (request, response) => {
  //response.json(request.body);
  const num1 = request.body.num1;
  const num2 = request.body.num2;

  switch (request.params.operation) {
    case 'add': {
      response.json(num1 + num2);
      break;
    }
    case 'subtract': {
      response.json(num1 - num2);
      break;
    }
    case 'multiply': {
      response.json(num1 * num2);
      break;
    }
    default: {
      response.send('Invalid request');
    }
  }
  // response.json(request.body);
});
