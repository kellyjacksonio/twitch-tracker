const   express = require('express'),
        app     = express(),
        request = require('request'),
        port    = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

var users = ['skylias', 'kelpamilli', 'simarchy', 'mistydawn95', 'breebunn', 'shadypenguinn', 'GEICOgaming'];
var userInformation = [];

// API request
users.forEach((user) => {
    request('https://wind-bow.gomix.me/twitch-api/streams/' + user, (err, req, body) => {
        var parsedBody = JSON.parse(body);
        if(err) {
            console.log(err);
        } else {
            if(parsedBody.stream === null) {
                console.log(user);
                userInformation.push({'username': user, 'status': 'Offline'});
                console.log(userInformation);
            } else {
                console.log(user);
                userInformation.push({'username': user, 'status': parsedBody.stream.game});
                console.log(userInformation);
            }
        }
    });
});


// ROUTES
app.get('/', (req, res) => {
    res.render('index', {userInformation: userInformation});
});

app.listen(port, () => {
    console.log(`listening on port ${port}!`);
});