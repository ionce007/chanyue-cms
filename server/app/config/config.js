const path = require('path');
const dev = require('./config.default.js');
const prd = require('./config.prd.js');

const map = new Map();
map.set('dev', dev);
map.set('prd', prd);

export let config = map.get( 'dev' || process.env.NODE_ENV );
