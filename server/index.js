const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

// Store request in the database
app.post('/api/request', async (req, res) => {
  const { method, url, headers, body } = req.body;
  const response = await fetch(url, {
    method,
    headers: JSON.parse(headers || '{}'),
    body: method !== 'GET' ? body : null,
  }).then(res => res.text());

  const request = await prisma.request.create({
    data: {
      method,
      url,
      headers: headers || '{}',
      body: body || '',
      response,
    },
  });

  res.json(request);
});

// Retrieve historical requests
app.get('/api/requests', async (req, res) => {
  const requests = await prisma.request.findMany();
  res.json(requests);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
