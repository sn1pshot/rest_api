const express = require('express')
const app = express()
const port = 3000;
const studentroutes = require('./src/student/routes');
app.use(express.json());
app.use('/api/first',studentroutes)
app.listen(port,()=>{console.log('server running')})
