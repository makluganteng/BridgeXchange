import express from 'express';
import cors from 'cors';

const app = express()
const port = 3001

app.use(cors())

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Api listening on port ${port}`)
})
