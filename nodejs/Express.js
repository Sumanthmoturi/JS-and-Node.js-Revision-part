/*Express.js:-
                1.Express.js is a web application framework for Node.js designed for building web applications and web applications
                2.It provides a robust set of features for web and mobile applications, making it easy to handle HTTP requests and responses.
 
*/
//Example helloworld

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//Express generator:-We use the application generator tool, express-generator to quickly create an application skeleton.  ($ npx express-generator)

//Basic routing:-     app.METHOD(PATH, HANDLER)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })