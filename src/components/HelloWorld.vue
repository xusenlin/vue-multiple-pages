<template>
  <div class="hello">
    <h1>{{ props.msg }}</h1>
    <p>当前环境{{ env }}</p>
    <p>当前环境的请求地址{{ baseURL }} </p>
    <Button round type="success" @click="showToast('XUSEMLLS')">XUSENLIN</Button>
  </div>
</template>

<script setup>
import { showToast,Button } from "vant"
import { env } from "@/config/app"
import { baseURL } from "@/config/request"

const props = defineProps({
  msg: String
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  h1{
    font-size: 16px;
  }
}

</style>
