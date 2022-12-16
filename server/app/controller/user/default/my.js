const config = require('../../config/config');
const mkapp = require('../../utils/mkapp');
const db = require('../../config/db');


let reg = require('../../model/user/reg.sql');
const express = require('express');
const router = express.Router();

//编辑器上传图片
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
//编辑器保存上传的文件 http://www.wangeditor.com/
function saveFiles(req) {
    return new Promise((resolve, reject) => {
        const imgLinks = [];
        const form = new formidable.IncomingForm();
        form.uploadDir='static/temp';
        form.parse(req, function (err, fields, files) {
            if (err) {
                reject('formidable, form.parse err', err.stack)
            }
            // 存储图片的文件夹
            const storePath = path.resolve(__dirname, '../../static', 'upload');
            if (!fs.existsSync(storePath)) {
                fs.mkdirSync(storePath)
            }

            // 遍历所有上传来的图片
            mkapp.objForEach(files, (name, file) => {
                // 图片临时位置
                const tempFilePath = file.path;
                // 图片名称和路径
                const fileName = file.name;
                const fullFileName = path.join(storePath, fileName);
                // 将临时文件保存为正式文件

                fs.renameSync(tempFilePath, fullFileName);
                // 存储链接
                imgLinks.push('/static/upload/' + fileName)
            });

            // 返回结果
            resolve({
                errno: 0,
                data: imgLinks
            })
        })
    })
};

//上传缩略图
router.post('/thumb',(req,res,next)=>{
    saveFiles(req).then((data)=>{
        let api={};
        api.data = {'imgUrl':data.data[0]}
        res.json(data)
   });
});
//个人信息
router.get('/',async(req, res, next)=>{
    try {
        let user = await db(res,reg.queryOne,[res.locals.uid]);
        let api={};
        api.data = user[0];
        res.render('user/my',api);
    } catch (error) {
        console.error(error);
    }
});

//更新个人信息
router.post('/update',async(req, res, next)=>{
   console.log(req.url)
    let body = req.body;
    const sex = body.sex;
    const face = body.face;
    const workplace = body.workplace;
    const tel = body.tel;
    const province = body.province;
    const address = body.address;
    const city = body.city;
    const area = body.area;
	try {
        let user = await db(res,reg.updateMy,[sex,face,workplace,tel,province,city,area,address,res.locals.uid]);
       console.log(user)
        res.redirect('/user/my');
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;