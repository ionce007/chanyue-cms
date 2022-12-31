'use strict';


class BaseController {
  constructor(){
    
  }

  success(res,data) {
    res.json({
      code: 200,
      msg: '成功',
      data: res,
    })
  }

  fail(res,err) {
    res.json({
      code: 500,
      msg:err
    })
	  console.error(err);
  }

  
}

module.exports = BaseController;
