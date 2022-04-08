const http = require('http');

let userArr = [
    {
        "id": 1,
        "name": 'Alex',
        "age": 50
    },
    {
        "id": 2,
        "name": 'Max',
        "age": 40
    }
]
let body
http.createServer(function (req,res){
    console.log('ServerWork')
    switch(req.method){
        case 'GET':
        res.end(JSON.stringify(userArr.flat()))
            break;
        case 'POST':
        body = '';
        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', () => {
            userArr.push(JSON.parse(body))
            res.end('User has been added')
        });
            break;
        case 'PUT':
            body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', () => {
            userArr.splice(0,userArr.length,JSON.parse(body))
            res.end('Array with users has been overwritten')
        });
            break;
        default:
        res.end(JSON.stringify(userArr))
    }
}).listen(6000);