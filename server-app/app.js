const express = require('express');

const app = express();
const port = 8088;

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});