import express from 'express'
import { routes } from './routes/Routes'

const app = express()

app.use(routes)

app.listen(3333)

console.log('\n🔥 Server running http://localhost:3333/')