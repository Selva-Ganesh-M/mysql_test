import express from "express"

const server = express()

const port = 5678
server.listen(port, () => {
    console.log(`listening at ${port}`);
})