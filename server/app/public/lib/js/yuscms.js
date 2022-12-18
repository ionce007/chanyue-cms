
function hasPermission(str){
    return document.querySelector('[data-info]').getAttribute('data-info').split(',').includes(str)?true:false;
};

function tips(obj,msg){
    obj.$message({
    message: msg,
    type: 'success'
    });
};

function tipsInfo(obj,msg){
    obj.$message({
    message: msg,
    type: 'info'
    });
};

function tipsWarn(obj,msg){
    obj.$message({
    message: msg,
    type: 'warning'
    });
}
