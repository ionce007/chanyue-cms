const db = require('../../../config/db');
let slide = {
    'query':`SELECT id,url,title,state,img FROM ys_slide ORDER BY state DESC,date DESC`,
};
module.exports = slide;