const express = require('express')

const app = express();

const PORT = 8080

app.get('/', (_request, response) => {
    response.send('Hey there!!2')
})

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})
