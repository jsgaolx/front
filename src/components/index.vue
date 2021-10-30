<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png">
    <div>
      <h1>学习记录</h1>
      <router-link to="/scrollNumber" class="title">数字滚动</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.title{
  font-size: 30px;
  font-weight: bolder;
  text-align: left;
  left: 10vw;
  width: 100vw;
}
</style>