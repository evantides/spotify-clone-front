const express = require('express');
const app = express();

app.use(express.static('build'));

// app.get('*', (req, res) => {
//     res.sendFile()
// })

app.listen(process.env.PORT)