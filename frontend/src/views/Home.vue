<template>
  <div class="main">
    <Header/>
    <div class="mt-5">
      <h1 class="main-text text-center">지금 바로 459988개의 맛집 정보와 91398개의 리뷰,<br>
        그리고 맛집 추천 시스템을 만나보세요!</h1>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {Header},

  beforeCreate: function () {
    if (this.$session.has("user")) {
      this.$router.push('/main')
    }
}
}
</script>

<style>
  .main {
    height: 901px;
    background-image: url(https://cdn.pixabay.com/photo/2014/06/11/17/00/cook-366875_1280.jpg);
  }
  .main-text {
    color:red;
  }
</style>