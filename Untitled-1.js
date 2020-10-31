var request = require('request'); //bash: npm install request
// URL for request POST /message
var token = '83763g87x';
var instanceId = '777';
var url = `https://api.chat-api.com/instance${instanceId}/message?token=${token}`;
var data = {
    phone: '15034365851', // Receivers phone
    body: 'Hello, world!', // Message
};
// Send a request
request({
    url: url,
    method: "POST",
    json: data
});