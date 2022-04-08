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
http.createServer(function (req,res){
    console.log('ServerWork')
    if(req.method === 'GET'){
        res.end(JSON.stringify(userArr.flat()))
    }else if(req.method === 'POST'){
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', () => {
            userArr.push(JSON.parse(body))
            res.end('User has been added')
        });
    }else if(req.method === 'PUT') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', () => {
            userArr.splice(0,userArr.length,JSON.parse(body))
            res.end('Array with users has been overwritten')
        });
    }else{
        res.end(JSON.stringify(userArr))
    }
}).listen(6000);