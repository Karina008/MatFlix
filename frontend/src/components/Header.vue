<template>
  <nav class="navbar dark">
    <button v-if="!this.loginState" @click="moveMain" class="btn">
      <h1 class="main-logo text-bold">MATFLIX</h1>
      <!-- <img src="@/assets/MATFLIX_logo.png /"> -->
    </button>
    <button v-else @click="moveloginMain" class="btn">
      <h1 class="main-logo text-bold">MATFLIX</h1>
      <!-- <img src="@/assets/MATFLIX_logo.png /"> -->
    </button>
    <div v-if="this.loginState">
      <form class="s-form" style="display:inline-block; margin-top:8px; margin-right:30px;">
        <i class="fa fa-search mr-2" style="color: white;"></i>
        <input class="address-input" type="text" v-model="query" placeholder="지역 검색. ex)강남" autofocus>
        <button @click.prevent="searchaddress()" class="btn text-white border">검색</button>
      </form>
      <button @click="logout" class="btn btn-danger">
        <h3 class="main-log text-right">Logout</h3>
      </button>
    </div>

    <div v-else>
      <button style="float:right;" type="button" class="btn" data-toggle="modal" data-target="#loginModal">
        <h3 class="main-log text-right">Login</h3>
      </button>
    </div>

    <!-- modal -->
    <div class="modal" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="loginModalLabel">Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter email"
                autocapitalize="off">
              </div>
              <div class="error-text" v-if="error.email">{{error.email}}</div>
              <hr>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" class="form-control" id="password" placeholder="Enter password">
              </div>
              <div class="error-text" v-if="error.password">{{error.password}}</div>
              <button class="btn btn-danger w-100 mt-3 text-white" data-dismiss="modal"
              @click.prevent="login()" :disabled="!isSubmit">로그인</button>
            </form>
          </div>
          <div class="modal-footer text-left">
            <p>아직 회원이 아니신가요?<br>
            <router-link to="/signup" data-dismiss="modal">여기</router-link>를 눌러 가입하세요!</p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import * as EmailValidator from "email-validator";
import PV from "password-validator";
import axios from '@/api.js'

export default {
  created() {
    this.loginState = this.$session.has("user")
    this.passwordSchema
      .is()
      .min(8)
      .is()
      .max(100)
      .has()
      .digits()
      .has()
      .letters();
  },

  watch: {
    email: function() {
      this.checkForm();
    },
    password: function() {
      this.checkForm();
    }
  },

  methods: {
    checkForm() {
      if (this.email.length > 0 && !EmailValidator.validate(this.email))
        this.error.email = "이메일 형식이 아닙니다.";
      else this.error.email = false;

      if (this.email.length > 0 && this.password.length >= 0 && !this.passwordSchema.validate(this.password))
        this.error.password = "영문,숫자 포함 8 자리이상이어야 합니다.";
      else this.error.password = false;

      let isSubmit = true;
      Object.values(this.error).map(v => {
        if (v) isSubmit = false;
      });
      this.isSubmit = isSubmit;
    },

    moveloginMain() {
      this.$router.push("/main")
    },

    moveMain() {
      this.$router.push("/")
    },

    login() {
      let loginUser = new FormData()
        loginUser.append('userid', this.email)
        loginUser.append('password', this.password)
      axios.post('/users/login/', loginUser)
      .then(({data}) => {
        if (data === 202) {
          alert('아이디가 존재하지 않습니다.')
        } else if (data === 201) { 
          alert('비밀번호가 일치하지 않습니다.')
        } else {
          alert('로그인성공')
          
          this.$session.set("user", data)
          
          this.$router.push('/main')
        }
      })
      .catch((error) => {
        alert('에러')
        console.log(error)
      })
    },
    
    logout(){
      this.$session.remove("user");
      this.$router.push('/');
    },

    searchaddress() {
      if (this.query=="") alert("검색어를 입력해주세요.")
      else this.$router.push("/search/?local=" + this.query );
    }
  },
  
  data: () => {
    return {
      email: "",
      password: "",
      passwordSchema: new PV(),
      error: {
        email: false,
        password: false
      },
      isSubmit: false,
      query: '',
    }
  }
}
</script>

<style>
  .main-logo {
    color: red
  }

  .main-log {
    color: red
  }

  .dark {
    background-color: black;
  }

  .btn {
    background-color: black;
  }

  .error-text {
    color: red
  }

</style>