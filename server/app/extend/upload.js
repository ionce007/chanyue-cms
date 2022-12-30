const multer = require('multer');
const dayjs = require('dayjs');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    //配置上传的目录
    destination: async (req, file, cb) => {
        // 生成文件夹
        const date = dayjs(Date.now()).format('YYYY/MM/DD');
        // 存储图片的文件夹
        const dir = path.join(__dirname, `../public/upload/qigong/${date}`);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir)
        }
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