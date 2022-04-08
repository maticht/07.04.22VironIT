let newUser
const http = require('http');
const {parse} = require('querystring')
// const url = require('url')

let userArr = [
    {
        "id": 1,
        "name": 'Alex',
        "age": 50
    }
]
// JSON.stringify(userArr)
http.createServer(function (req,res){
    console.log('ServerWork')
    if(req.method === 'GET'){
        res.end(JSON.stringify(userArr))
    }else if(req.method === 'POST'){
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', () => {
            userArr.push(parse(body))
            console.log(parse(body))
                console.log(body)
            console.log(userArr)
            res.end('User has been added')
        });
    }else if(req.method === 'PUT') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', () => {
            userArr.splice(0,userArr.length,parse(body))
            res.end('User has been added')
        });
    }else{
        res.end(JSON.stringify(userArr))
    }

}).listen(6000,'127.0.0.1');