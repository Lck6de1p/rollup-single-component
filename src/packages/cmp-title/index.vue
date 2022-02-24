<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <van-button>click</van-button>
  </div>
</template>

<script>
import Button from "vant/lib/button";
import 'vant/lib/button/style';

export default {
  name: "cmp-title",
  props: {
    title: {
      type: String,
      default: "this is a title",
    },
  },
  components: {
    [Button.name]: Button
  }
};
</script>

<style lang="less" scoped>
.title {
  color: blue;
  height: 50px;
}
</style>