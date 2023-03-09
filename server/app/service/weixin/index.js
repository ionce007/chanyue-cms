
class WeiXinService   {
  constructor() {
  }

  // login
  static async login(appid,secret,code) {
    try {
        const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`;
        const result = await fetch(url);
        return result.json()
    } catch (err) {
      console.error(err);
    }
  }
  
}

module.exports = WeiXinService;