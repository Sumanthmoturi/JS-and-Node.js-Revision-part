/*Node.js:-
            1.It is a runtime environment that executes JavaScript outside the browser.(backend)
            2.Node.js leverages the asynchronous nature of JS,making it good fit for non-blocking,event driven server side programming architecture
*/

/*Concepts:-
            1.Node REPL:-     1.Node.js REPL allows you to interactively run JavaScript code in the terminal
            
            2.Node CLI:-      1.The Node.js Command Line Interface (CLI) allows you to execute JavaScript files directly from the terminal 
            
            3.Process Object:-1.It is a global object that provides information about the current Node.js process and allows you to interact with it.
                              2.process.exit(0) ends current node.js process
                              3.process.argv helps to access command line arguments

            4.Modules:-       1.Each JS file is treated as seperate module and node.js supports two modules systems
            
            4.1.Common JS modules:-1.CommonJS uses require() to import and module.exports to export.
                                   2.Example:-Calculator
        
            4.2.ES modules:-       1.ES Modules use import and export keywords directly.
                                   2.example:-calculator(ES Module style)

            5.Packages and NPM:-   1.A package is a directory that has one or more modules grouped together
                                   2.Pacakges are stored in NPM
                                   3.To install a package use (npm install package name)
                                   4.use npm init to generate package.json file 
            
            6.Versions :-          1.Node.js versions follow the Semantic Versioning (SemVer) format, which looks like MAJOR:MINOR:PATCH  
            
            7.fs module:-          1.The fs (File System) module in Node.js provides functions to interact with the file system
                                   2.readFile function:-
*/                                                      import {readFile} from "node:fs";
                                                        readFile("file.txt", "utf8", (error, text) => {
                                                            if (error) throw error;
                                                        console.log("The file contains:", text);
                                                        });
                                 //3.writeFile function:-
                                                        import {writeFile} from "node:fs";
                                                        writeFile("graffiti.txt", "Node was here", err => {
                                                                if (err) console.log(`Failed to write file: ${err}`);
                                                                else console.log("File written.");
                                                        });

                                 //4.Buffer:-
                                                        import {readFile} from "node:fs";
                                                        readFile("file.txt", (error, buffer) => {
                                                                if (error) throw error;
                                                        console.log("The file contained", buffer.length, "bytes.","The first byte is:", buffer[0]);
                                                        });
                                 //5.node:fs/promises:- offers promise based versions of fs functions
                                                        import {readFile} from "node:fs/promises";
                                                        readFile("file.txt", "utf8")
                                                        .then(text => console.log("The file contains:", text));
                                 //6.readFile sync version:-the synchronous version of readFile is called readFileSync.
                                 import {readFileSync} from "node:fs";
                                 console.log("The file contains:",
                                 readFileSync("file.txt", "utf8"));                       
                                 
//            8.http module:- enables you to create HTTP server to handle incoming requests and send responses.
import {createServer} from "node:http";
let server = createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code></p>`);
  response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");            


//            9.Streams:- Provides a way to handle data that is too large to be processed all at once or that needs to be processed as it arrives
                          //1.Readable Streams:-Used to read data from a source
                          const fs = require('fs');
                          const readableStream = fs.createReadStream('input.txt', 'utf8');
                          readableStream.on('data', (chunk) => {
                                    console.log(chunk);
                          });
                          //2.Writable Streams: Used to write data to a destination
                          const fs = require('fs');
                          const writableStream = fs.createWriteStream('output.txt');
                          writableStream.write('This is some data.\n');
                          writableStream.write('This is more data.\n');
                          writableStream.end();
                          //Events in streams:- Data,end,error and finish

//           10.File server:-an HTTP server that allows remote access to a filesystem.
const http = require('http');  // Import the HTTP module to create an HTTP server
const fs = require('fs');      // Import the File System (fs) module to read files
const path = require('path');  // Import the Path module to handle and transform file paths

// Create the HTTP server
const server1 = http.createServer((req, res) => {
    // Determine the file path based on the request URL
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    // Get the file extension of the requested file
    const extname = path.extname(filePath);
    // Set the default content type to 'text/html'
    let contentType = 'text/html';
    // Check the file extension and set the appropriate Content-Type header
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    // Read the requested file from the file system
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // If file is not found, serve the 404.html page
            if (err.code === 'ENOENT') {
                fs.readFile(path.join(__dirname, '404.html'), (err, pageNotFound) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(pageNotFound, 'utf8');
                });
            } else {
                // If there is some other server error, send a 500 response
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // If the file is found, serve it with the appropriate Content-Type
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});
const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


