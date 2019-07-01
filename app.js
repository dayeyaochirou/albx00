// 引入express
const express = require('express')
// 引入fs
const fs = require('fs')
// 创建app
const app = express()
// app开启监听
app.listen(3000, () => {
    console.log('server is renning for 127.0.0.1:3000')
})
// 托管静态
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))

app.get('/', (req, res) => {
    fs.readFile((__dirname + '/views/index.html'), (err, data) => {
        if (err) return res.end('404')
        res.end(data)
    })
})