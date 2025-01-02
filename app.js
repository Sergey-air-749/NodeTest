const { log } = require('console');
const express = require('express')
const app = express()
let fs = require('fs');
const port = 3000

app.use(express.static('public'));
app.use(express.static('file'));
app.use(express.static('json'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/new', (req, res) => {
    const file = req.query.file;
    const text = req.query.text;

    console.log(file)
    console.log(text)

    fs.writeFileSync(__dirname +  '/file/' + file, text)
})

app.get('/open', (req, res) => {
    const file = req.query.file;

    console.log(file)

    res.sendFile(__dirname + '/file/' + file)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})