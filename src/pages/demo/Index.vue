<template>
  <div id="app" class="index">
    <div>
      <h2 style="padding: 10px;margin-bottom: 0">
        全部页面如下：<span style="font-size: 14px">(ctrl+f)查找</span>
      </h2>
      <div class="tip">
        <ul class="tip-content">
          <li>requiredParams：Url必须携带的参数</li>
          <li>optionalParams：Url可选携带的参数</li>
        </ul>
      </div>
      <ul class="page-list">
        <li v-for="(v, name, i) in pageConfig" :key="name">
          {{ i + 1 }}、<a :href="'./' + name + '.html'"
            >{{ name }}.html-{{ v.title }}</a
          >
          <pre @click="tip(v.requiredParams)">
requiredParams：{{ v.requiredParams || {} }}</pre
          >
          <pre @click="tip(v.optionalParams)">
optionalParams：{{ v.optionalParams || {} }}</pre
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PageConfig from "@/config/page.js";
export default {
  name: "app",
  data: function() {
    return {
      pageConfig: PageConfig
    };
  },
  methods: {
    tip(o) {
      alert(JSON.stringify(o));
    }
  },
  mounted() {},
  beforeDestroy: function() {},
  components: {}
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
pre {
  border: 0.02rem dashed #eee;
  font-size: 14px !important;
  line-height: 28px;
  padding: 10px 20px;
  margin: 20px;
  overflow-x: auto;
}
.page-list {
  margin-top: 20px;
  li {
    border-bottom: 1px solid #ff4242;
    padding: 6px;
    margin-bottom: 10px;
  }
}
.myPopup {
  width: 80%;
  border-radius: 20px;
  .myCell {
    align-items: center;
  }
}
.tip {
  padding: 10px;

  .tip-content {
    border-radius: 2px;
    background: #fafafa;
    list-style-type: disc;
    font-size: 12px;
    color: #969fa9;
    position: relative;
    line-height: 26px;
    padding: 18px 10px 18px 40px;
    &:after {
      display: block;
      content: "";
      background: #fafafa;
      width: 12px;
      height: 12px;
      position: absolute;
      top: -6px;
      transform: rotate(45deg);
      left: 26px;
    }
  }
}
</style>
