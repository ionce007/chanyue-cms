const config = require('../../../config/config');
const db = require(config.db_url);
let search = {
    //标题搜索总页数
    'countByTitle': function(str){
        return `SELECT COUNT(*) as count FROM ys_article a,ys_nav n WHERE a.nav=n.id AND a.title LIKE '%${str}%'`
    },
     //TAG搜索总页数
     'countByTag': function(str){
        return `SELECT COUNT(*) as count FROM ys_article a,ys_nav n WHERE a.nav=n.id AND a.tag LIKE '%${str}%'`
    },
    //关键字搜索
    'countByKeyWord': function(str){
        return `SELECT COUNT(*) as count FROM ys_article a,ys_nav n WHERE a.nav=n.id AND a.keyword LIKE '%${str}%'`
    },
    //标题搜索
    'searchByTitle': function(str){
        return `SELECT a.id,a.title,a.date,a.info,a.thumbnail,a.count,n.nav_name FROM ys_article a,ys_nav n WHERE a.nav=n.id AND a.title LIKE '%${str}%' ORDER BY a.date DESC LIMIT ?,?`
    },
    //关键字搜索
    'searchByKeyWord': function(str){
        return `SELECT a.id,a.title,a.date,a.info,a.thumbnail,a.count,n.nav_name FROM ys_article a,ys_nav n WHERE a.nav=n.id AND a.keyword LIKE '%${str}%' ORDER BY a.date DESC LIMIT ?,?`
    },
     //Tag搜索
    'searchByTag': function(str){
        return `SELECT a.id,a.title,a.date,a.info,a.thumbnail,a.count,n.nav_name FROM ys_article a,ys_nav n WHERE a.nav=n.id AND a.tag LIKE '%${str}%' ORDER BY a.date DESC LIMIT ?,?`
    }
                
    
};

module.exports = search;