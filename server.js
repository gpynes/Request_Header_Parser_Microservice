const restify = require('restify'),
    server = restify.createServer({
        name: 'Request_Header_Parser_Microservice'
    })


server.get('/', (req, res) => res.json({
    ipaddress: (req.headers['x-forwarded-for'] || req.connection.remoteAddress).split(',')[0],
    language: req.headers['accept-language'].split(',')[0],
    software: req.headers['user-agent'].split('(')[1].split(')')[0]
}))

server.listen(process.env.PORT || 8080)