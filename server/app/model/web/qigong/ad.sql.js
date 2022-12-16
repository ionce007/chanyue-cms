const db = require('../../../config/db');
let ad = {
    'query':`SELECT title,img,url FROM ys_ad WHERE state=1 ORDER BY date ASC`
};

module.exports = ad;