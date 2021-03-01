const http = require("http");
const url = require('url');
const fs = require('fs');
const queryString = require('querystring');

const port = 5000;

function requestHandler(req, res) {
    let reqUrl = url.parse(req.url);
    let params = queryString.parse(reqUrl.query);
    console.log(reqUrl.pathname);
    console.log(params);

    switch (reqUrl.pathname) {
        case '/cats':
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            fs.readFile('./views/cats.html', (err, data) => {
                if(err){
                    console.log('some error');
                    return;
                }

                res.write(data);
                res.end();
            });
            break;

        case '/dogs':
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });

            res.write('Hello dogs!');
            res.end();
            break;

        default:
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.end();
            break;
    }
    
}

const app = http.createServer(requestHandler);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));