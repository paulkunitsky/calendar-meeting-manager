const fs = require('fs')
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, _ => console.log(`server is serving on port ${port}`))
