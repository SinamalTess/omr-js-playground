import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'

const app = express()
const port = 3001

export const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use('*', cors(corsOptions))

app.use("/datasets", express.static(__dirname + '/datasets'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen({ port }, () => {

})

