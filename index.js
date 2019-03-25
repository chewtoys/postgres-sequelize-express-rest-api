const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
    console.log('server listening on port:', PORT);
} )
app.get('/', (req, res) => {
    console.log('server running on port:', PORT);
})