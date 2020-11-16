<template>
  <div class="w-50 h-50 mx-auto my-auto">
    <h1 align="center" class="py-3">잘못된 경로로 접근하셨습니다.</h1>
    <router-link to="/">
      <div class="wrapC" align="center">
        <button class="btn btn--back-round--black text-red"><h3>메인으로 돌아가기</h3></button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  body {
    background-color: black;
  }

  h1 {
    color: red
  }

  h3 {
    color: red
  }
</style>