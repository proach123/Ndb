const express = require('express');
const bodyParser = require('body-parser');

const ctrl = require('./controller')

// imports 

const app = express();

app.use(bodyParser.json());
app.use(express.json());

//ENDPOINTS
app.get('/api/healths', ctrl.getUser);


app.post('/api/health', ctrl.createUser);

app.delete('/api/health/:id', ctrl.deleteUser);

app.put('/api/health/:id', ctrl.updateUser);


const PORT= 4001
app.listen(PORT, ()=> console.log('Its alive on port 4001'))