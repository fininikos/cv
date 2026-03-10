const express = require('express');
const path = require('path');
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const app = express();

const port = 3000;
const publicDirectory = 'src';

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, publicDirectory));
app.use(connectLivereload());

app.use('/', express.static(publicDirectory));

app.listen(port, () => console.log(`FininikosCV app listening on port ${port}!`));
