import express from 'express';

const app = express()
const PORT = 3002

app.use(express.json());

app.use('/sc', require('./src/routes/contract-interaction-route'));

app.listen(PORT, () => {
  console.log("Server listen on port ", PORT)
})