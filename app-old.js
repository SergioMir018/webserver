const http = require('http');

const server = http.createServer((req, resp) => {
    //console.log(req)

    // resp.writeHead(200, {'Content-Type': 'application/json'});

    // const person = {
    //     id: 1,
    //     name: 'Sergio Mir'
    // }


    // resp.write(JSON.stringify(person));

    resp.write('Hello world')
    resp.end();
})
.listen(8080)

console.log('Listening in port', 8080)