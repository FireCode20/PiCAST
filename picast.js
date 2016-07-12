var sys = require('sys');
var exec = require('child_process').exec;
var express = require('express');
var app = express();


//is this root?
app.get('/', function (req, res) {
        res.send('Welcome to PiCAST 3! In the URL, type what you want to do...');
});

/* Why Compile Use it? We are useing a "Faster" verion.
app.get('/yt-stream/:url', function (req, res) {
        res.send('Streaming YouTube Video...');
        exec("livestreamer --player=mplayer https://www.youtube.com/watch?v=" + req.params.url + " best");
});
*/

//My YT Streamer
app.get('/yt-stream/:url', function (req, res) {
        res.send('Streaming YouTube Video...');
        exec("kodi-yt-stream.sh https://www.youtube.com/watch?v=" + req.params.url);
});

app.get('/yt-streamfull/:urlf', function (req, res) {
        res.send('Streaming YouTube Video...');
        exec("kodi-yt-stream.sh" req.params.urlf);
});

app.get('/omx-stream/:protocol/:ip/:port/:link', function (req, res) {
        res.send('Streaming From' + req.params.ip + ':' + req.params.port + "/" + req.params.link );
        exec("kodi-omxstart.sh" + req.params.protocol + "://" + req.params.ip +  ':' + req.params.port + "/" + req.params.link);
});

//No-Kodi
app.get('/nk/yt-stream/:urlb', function (req, res) {
        res.send('Streaming YouTube Video...');
        exec("yt-stream.sh https://www.youtube.com/watch?v=" + req.params.urlb);
});

app.get('/nk/yt-streamfull/:urlfb', function (req, res) {
        res.send('Streaming YouTube Video...');
        exec("yt-stream.sh" req.params.urlfb);
});

app.get('/nk/omx-stream/:protocolb/:ipb/:portb/:linkb', function (req, res) {
        res.send('Streaming From' + req.params.ipb + ':' + req.params.portb + "/" + req.params.linkb );
        exec("omxstart.sh" + req.params.protocolb + "://" + req.params.ipb +  ':' + req.params.portb + "/" + req.params.linkb);
});


// Setup PiCAST Server
var srv = app.listen(3000, function () {
        var host = srv.address().address;
        var port = srv.address().port;

        console.log('Access at http://%s:%s', host, port);
});
