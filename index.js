const express = require('express')
const app = express()

const base = "/desserts"

const urls = ["/", base, `${base}/cakes`, `${base}/cakes/vanilla`, `${base}/cakes/vanilla/cake`, `${base}/cakes/chocolate`, `${base}/donuts`, `${base}/donuts/lemon`, `${base}/donuts/strawberry`, `${base}/donuts/kiwi`, `${base}/donuts/kiwi/special`, `${base}/donuts/kiwi/normal`,]


app.get(urls, function (req, res) {
    res.send(`You are in: ${req.originalUrl}`)
})

app.listen(3000) 