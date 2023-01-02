const multer = require('multer');
const dayjs = require('dayjs');
const fs = require('fs');
const path = require('path');
const {mkdirsSync} = require('./helper.js');

const storage = multer.diskStorage({
    //配置上传的目录
    destination: async (req, file, cb) => {
        // 生成格式化日期
        let date = dayjs(Date.now()).format('YYYY/MM/DD');
        // 获取目录路径
        let dir = path.join('app/public/upload/qigong', date);
        // 生成目录，异步改同步
       
        function mkdirsSync(dirname) {
            if (fs.existsSync(dirname)) {
              return true;
            }
            if (mkdirsSync(path.dirname(dirname))) {
                console.log(dirname)
              fs.mkdirSync(dirname);
              return true;
            }
          }
          mkdirsSync(dir);
        cb(null, dir);
    },
    //修改上传后的文件名
    filename: function (req, file, cb) {
        //1、获取后缀名
        let extname = path.extname(file.originalname);
        //2、根据时间戳生成文件名
        cb(null, Date.now() + extname)
    }
});

const upload = multer({ storage: storage })
module.exports = upload;