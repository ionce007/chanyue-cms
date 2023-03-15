
class OpenService   {
  constructor() {
  }

  static async news60s() {
    try {
        const url = `https://api.qqsuu.cn/api/dm-60s?type=json`;
        const result = await fetch(url);
        return result.json()
    } catch (err) {
      console.error(err);
    }
  }

  static async jianbao() {
    try {
        const url = `https://api.qqsuu.cn/api/dm-bulletin`;
        const result = await fetch(url);
        return result.json()
    } catch (err) {
      console.error(err);
    }
  }
  
}

module.exports = OpenService;