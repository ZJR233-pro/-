const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('.'))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.listen(3000, () => {
  console.log('✅ AI导演工作室已启动：http://localhost:3000')
})
