const express = require('express');
const app = express();
const PORT = 8080;

const {dbConnection} = require('./config/config');
const taskRoutes = require('./routes/tasks');

const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index.js')


app.use(express.json()); 

app.use('/', taskRoutes);

dbConnection();


app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))


app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`)
})