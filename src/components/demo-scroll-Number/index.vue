<template>
  <div >
    <div>
      <h1>npm 例子</h1>
      <div class="demo1">
        <h1>demo</h1>
        <ScrollNumber :value="time" :itemStyle="{color: 'red', fontSize:'40px'}"></ScrollNumber>
        <br>
        <ScrollNumber :value="value" :itemStyle="{color: 'red', fontSize:'40px'}"></ScrollNumber>
        <br>
        <ScrollNumber :value="value" :itemStyle="{ fontSize: '120px' , lineHeight: '169px' }"></ScrollNumber>
      </div>
      <div class="demo2">
        <ScrollNumber :value="time"></ScrollNumber>
        <br>
        <ScrollNumber :value="time" :itemStyle="{ fontSize: '120px' , color: 'red' }"></ScrollNumber>
        <br>
        <ScrollNumber :value="value" :itemStyle="{ fontSize: '120px' , color: 'red' }"></ScrollNumber>
        <br>
        <ScrollNumber :value="value" :itemStyle="{ fontSize: '120px' , color: 'red' }"></ScrollNumber>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index.vue",
  components: {},
  data() {
    return {
      time: this.$moment().format("HH-mm-ss"),
      value: this.$moment().format("HHmmss"),
    }
  },
  created() {
    setInterval(() => {
      this.time = this.$moment().format("HH-mm-ss");
      this.value = this.$moment().format("HHmmss");
    }, 1000)
  },

}
</script>

<style scoped>
.demo1{
  text-align: center;
  line-height: 40px;
  font-size: 90px;
  font-family: "Arial Black",sans-serif;
  margin-top: 20px;
}
.demo2{
  font-family: "Arial Black",sans-serif;
  margin-top: 20px;
}
</style>