var botkit = require('botkit');

var controler = botkit.slackbot({
    debug: true,
    log: true,
    logLevel: 4
});

controler.spawn({
    token: ,
}).startRTM();