const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

app.use(koaBody());

const address = require('../address.js');

app.use(address.routes());

app.listen(8080);