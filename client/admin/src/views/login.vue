<template>
  <div>
    <div class="ys-wrap page-login pt-160 row">
      <div class="login-ad mt-35 col-12">
        <img src="../assets/img/banner.png" alt="" />
      </div>
      <div class="login-form col-12">
        <div class="ys-logo mb-30 text-c"></div>
        <ul class="w-330">
          <li class="border-b pt-8 pb-8 mb-10 pos-r">
            <i class="ico ico-user pos-r t-2"></i>
            <input type="text" class="ml-10 f-14 lh-20 c-333" v-model="params.username" placeholder="用户名" />
          </li>
          <li class="border-b pt-8 pb-8 mb-10 pos-r">
            <i class="ico ico-pass pos-r t-2"></i>
            <input type="password" class="ml-10 f-14 lh-20 c-333" v-model="params.password" placeholder="密码"
              @keyup.enter="toLogin" />
          </li>
          <li class="mb-10 pos-r captcha">
            <input type="text" class="f-14 lh-20 c-333 code" v-model="code" placeholder="请输入验证码" />
            <span v-html="svg"></span>
            <span @click="getCaptcha" class="see">看不清，换一张</span>
          </li>

          <li class="mt-21">
            <input type="submit" @click="toLogin" class="btn-block f-16 c-fff lh-22" value="登录" />
          </li>
        </ul>
      </div>
    </div>

    <footer class="ys-footer">
      <p class="f-13 c-a1a3aa text-c">
        &copy;
        <a href="http://www.chanyue.top" class="mr-5" target="_blank" title="chanyue">www.chanyue.top</a>
        禅悦系统 ● 位于南京 服务全国
      </p>
    </footer>
  </div>
</template>

<script>
import { login, checkCaptcha, captcha } from "../api/index";
import { setCookie } from "../utils/tools";
export default {
  name: "login-in",
  data: () => {
    return {
      svg: "",
      code: "",
      params: {
        username: "",
        password: "",
      },
    };
  },
  computed: {},
  created() {
    this.getCaptcha();
  },

  mounted() { },
  methods: {
    async getCaptcha() {
      try {
        let v = Math.random().toString().slice(4, 8);
        let res = await captcha(v);
        this.svg = res;
      } catch (error) {
        console.log(error);
      }
    },

    async checkCaptcha() {
      try {
        let res = await checkCaptcha(this.code);
        if (res.code === 200 && res.data) {
          return true;
        } else {
          this.$message({
            message: "验证码不正确",
            type: "warning",
          });
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    //校验
    validate() {
      if (this.params.username.length < 2) {
        this.$message({
          message: "用户名不能少于2位",
          type: "warning",
        });
        return false;
      }
      if (this.params.password.length < 6) {
        this.$message({
          message: "密码不能少于6位",
          type: "warning",
        });
        return false;
      }
      return true;
    },

    //登录
    async toLogin() {
      let val = this.validate();
      if (val) {
        let res = await this.checkCaptcha();
        if (!res) {
          return;
        }
        login({
          username: this.params.username,
          password: this.params.password,
        })
          .then((res) => {
            if (res.code === 200 && res.data) {
              setCookie("username", res.data.username);
              setCookie("token", res.data.token);
              this.$router.push({ name: "home-index" });
              return;
            }
            this.$message({
              message: "用户名或密码错误",
              type: "warning",
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>
<style scoped>
.ys-logo {
  margin-top: 140px;
}

.ys-wrap {
  height: calc(100vh - 80px);
  min-height: 540px;
}

.ys-footer {
  height: 80px;
}

.page-login {
  width: 940px;
  margin-left: auto;
  margin-right: auto;
}

.login-ad img {
  max-width: 390px;
  max-height: 340px;
}

.login-form {
  padding-left: 140px;
}

.login-form input::-webkit-input-placeholder {
  font-family: "microsoft yahei";
  color: #bfc3d2;
}

.captcha {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.code {
  height: 32px;
  border-bottom: 1px solid #ddd;
  padding-left: 10px;
  width: 140px;
}

.see {
  color: #337ecc;
  cursor: pointer;
}

.c-a1a3aa {
  color: #a1a3aa;
}

.btn-block {
  display: block;
  text-align: center;
  position: relative;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: #5b82ff;
  box-shadow: 0 0 8px 0 rgba(91, 130, 255, 0.5);
  border-radius: 25px;
  cursor: pointer;
}

.btn-block:hover {
  background-color: rgb(103, 141, 253);
  cursor: pointer;
}

.ico {
  width: 16px;
  height: 16px;
  display: inline-block;
}

.ico-user {
  background-image: url("../assets/img/ico-user.png");
  background-size: cover;
}

.ico-pass {
  background-image: url("../assets/img/ico-pass.png");
  background-size: cover;
}

.pt-160 {
  padding-top: 16vh;
}

.w-130 {
  width: 130px;
}
</style>