

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
};

/**
 * 获取url中path路径
 */
function pathName(){
   return location.pathname.split('/').filter(function(item,index){
        return item !=''
    })
};


;(function(w,d){
    //导航
    var dt = $('.ys-admin-nav ul li dl dt');
    dt.on('click',function(e){
        $(this).children('.ico-down').toggleClass('current');
        $(this).next().toggle();
    });

    // router-link-active
   
    $('[data-href]').on('click',function(){
        $('iframe').attr('src',$(this).attr('data-href'));
        $('[data-href]').removeClass('router-link-active');
        $(this).addClass('router-link-active');
    });
    //退出
    $('.ys-admin-user').on('click',function(e){
        e.stopPropagation();
        $(this).children('.ico-down').toggleClass('current');
        $('.ys-admin-equit').toggleClass('current');
    });
    
    $(document).click(function () {
        $('.ys-admin-user').children('.ico-down').removeClass('current');
        $('.ys-admin-equit').removeClass('current');
    });  

    $('.ys-admin-equit').on('click',function(e){
        e.stopPropagation();
        axios.get('/admin/login/equit')
            .then((data)=>{
            if(data.data.success){
              location.href="/admin/login"
           }
        });
    });
   
    


}(window,document));
