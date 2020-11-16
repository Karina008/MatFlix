<template>
  <div style="height:800px;" class="gradient">
    <Header/>
    <div class="w-50 mx-auto">
    <h1 style="font-weight:bold" class="my-3">회원가입</h1>
    <form>
      <!-- 이메일 -->
      <div class="form-group">
        <label style="font-weight:bold" for="email">이메일</label>
        <input type="email" v-model="email" class="form-control" id="email" placeholder="이메일을 입력해주세요." autocapitalize="off">
      </div>
      <div class="error-text" v-if="error.email">{{error.email}}</div>
      <button class="btn btn-danger" v-if="!error.email" @click.prevent="dCheck(email)">중복확인</button>
      <hr>
      <!-- 비번 -->
      <div class="form-group">
        <label style="font-weight:bold" for="password">비밀번호</label>
        <input type="password" v-model="password" class="form-control" id="password" placeholder="비밀번호를 입력해주세요.">
      </div>
      <div class="error-text" v-if="error.password">{{error.password}}</div>
      <hr>
      <!-- 비번확인 -->
      <div class="form-group">
        <label style="font-weight:bold" for="password-confirm">비밀번호 확인</label>
        <input type="password" v-model="passwordConfirm" class="form-control" id="password-confirm" placeholder="비밀번호를 한번 더 입력해주세요.">
      </div>
      <div class="error-text" v-if="error.passwordConfirm">{{error.passwordConfirm}}</div>
      <hr>
      <!-- 성별 -->
      <div class="form-group">
        <label style="font-weight:bold;font-size:1.2rem" for="gender">성별</label>
        <div class="d-flex flex-row">
          <div class="radio">
            <label for="남">남</label>
            <input type="radio" name="남" value="남" v-model="gender">
          </div>
          <div class="radio">
            <label for="여" class="ml-2">여</label>
            <input type="radio" name="여" value="여" v-model="gender">
          </div>
        </div>
      </div>
      <hr>
      <!-- 나이, 지역 -->
      <div class="form-group">
        <label style="font-weight:bold" for="age">나이</label>
        <input type="number" value="age" v-model="age" class="age-form ml-2 mr-4">
        <label style="font-weight:bold" for="local">지역</label>
        <input type="text" value="local" v-model="local" placeholder="ex)관악구" class="ml-2" style="width: 100px">
      </div>
      <hr>
      <!-- 선호 카테고리 -->
      <div class="form-group">
        <label style="font-weight:bold; font-size:1.2rem" for="custom-checkbox">선호 음식</label><br>
        <span style="font-weight:bold">1순위</span>
        &nbsp;
        <select style="width:150px;" v-model="category1" >
          <option value="category1">=== category ===</option>
            <option value="중식" >중식</option>
            <option value="한식">한식</option>
            <option value="분식" >분식</option>
            <option value="치킨">치킨</option>
            <option value="일식" >일식</option>
            <option value="양식">양식</option>
            <option value="카페" >카페</option>
            <option value="패스트푸드">패스트푸드</option>
        </select>
        <br>
        <span style="font-weight:bold">2순위</span>
        &nbsp;
        <select style="width:150px;" v-model="category2" >
          <option value="category2">=== category ===</option>
            <option value="중식" >중식</option>
            <option value="한식">한식</option>
            <option value="분식" >분식</option>
            <option value="치킨">치킨</option>
            <option value="일식" >일식</option>
            <option value="양식">양식</option>
            <option value="카페" >카페</option>
            <option value="패스트푸드">패스트푸드</option>
        </select>
        <br>
        <span style="font-weight:bold">3순위</span>
        &nbsp;
        <select style="width:150px;" v-model="category3">
          <option value="category3">=== category ===</option>
            <option value="중식" >중식</option>
            <option value="한식">한식</option>
            <option value="분식" >분식</option>
            <option value="치킨">치킨</option>
            <option value="일식" >일식</option>
            <option value="양식">양식</option>
            <option value="카페" >카페</option>
            <option value="패스트푸드">패스트푸드</option>
        </select>
      </div>
      <button class="btn btn-danger w-100 mt-3 text-white submit"
      @click.prevent="signUp()" :disabled="!isSubmit">회원가입</button>
    </form>
  </div>
  </div>
</template>

<script>
import PV from "password-validator";
import * as EmailValidator from "email-validator";
import Header from '@/components/Header';
import axios from '@/api.js';

export default {
  components: {Header},

  created() {
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
    email: function () {
      this.checkForm();
    },
    password: function () {
      this.checkForm();
    },
    passwordConfirm: function () {
      this.checkForm();
    },
  },

  methods: {
    signUp() {
      if ( this.age==""){
        alert('나이를 입력해주세요.')
      } else if (this.local=="") {
        alert('지역을 입력해주세요.')
      } else if (this.category1=="category1") {
        alert('선호 음식 1순위를 설정해주세요.')
      } else if (this.category2=="category2"){
        alert('선호 음식 2순위를 설정해주세요.')
      } else if (this.category3=="category3") {
        alert('선호 음식 3순위를 설정해주세요.')
      } else {
        let newUser = new FormData()
          newUser.append('userid', this.email)
          newUser.append('password', this.password)
          newUser.append('age', this.age)
          newUser.append('gender', this.gender)
          newUser.append('local', this.local)
          newUser.append('category1', this.category1)
          newUser.append('category2', this.category2)
          newUser.append('category3', this.category3)
        axios.post('/users/signup/', newUser)
        .then(({data}) => {
          if (data === 200) {
            alert('회원가입에 성공하였습니다!')
            this.$router.push('/')
          } else {
              alert('이메일이 중복되었거나 회원가입에 문제가 발생하였습니다!')
          }
        })
        .catch((error) => {
          alert('회원가입에 실패하였습니다.')
          console.log(error)
        })
    }},

    checkForm() {
      if (this.email.length > 0 && !EmailValidator.validate(this.email)) 
        this.error.email = "이메일 형식이 아닙니다.";
      else this.error.email = false;
      
      if (this.email.length > 0 && this.password.length >= 0 && !this.passwordSchema.validate(this.password))
        this.error.password = "영문,숫자 포함 8 자리이상이어야 합니다."
      else this.error.password = false;

      if (this.password !== this.passwordConfirm)
        this.error.passwordConfirm = "동일한 비밀번호를 입력해주세요."
      else this.error.passwordConfirm = false;

      let isSubmit = true;
      Object.values(this.error).map(v => {
        if (v) isSubmit = false;
      });
      this.isSubmit = isSubmit;
    },

    dCheck(email) {
      if (email) {
        let checkEmail = new FormData()
        checkEmail.append('userid', email)
        axios.post('/users/d_check/', checkEmail)
      .then(({data}) => {
        if (data === 200) {
          alert("사용 가능한 아이디입니다.")
          this.d_check = true
        } else {
          alert("이미 존재하는 아이디입니다.")
        }
      }) 
      } else {
        alert("이메일을 입력해주세요.")
      }
    },

  },
  data: () => {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
      passwordSchema: new PV(),
      gender: "남",
      age : "",
      local: "",
      error: {
        email: false,
        password: false,
        passwordConfirm: false,
      },
      isSubmit: false,
      category1:"category1",
      category2:"category2",
      category3:"category3",
    }
  }
}
</script>

<style>
  .error-text {
    color: red
  }

  .age-form {
    width: 50px
  }

  .submit {
    height: 50px;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
</style>