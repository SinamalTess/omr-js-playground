import express from 'express'
import cors from 'cors'

const app = express()
const port = 3001

export const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// app.use('*', cors(corsOptions))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen({ port }, () => {

})

