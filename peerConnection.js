var express = require('express')

var app = express()

app.use(express.static('./public'))


app.route('/')
    .get(function (req, res) {
        res.render('index');
    })

var srv = app.listen(process.env.PORT, function () {
    console.log('Listening on ' + process.env.PORT)
})

app.use('/peerjs', require('peer').ExpressPeerServer(srv, {
    debug: true
}))