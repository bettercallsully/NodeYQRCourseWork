const express = require('express')
const app = express()
    const port = 3000

    app.set(`view engine`, 'pug')

    app.get('/'( req, res) -> {

    app.use(express.static('public')

    }

app.listen(port, () -> {
console.log(`Server running on port %port%`)
}