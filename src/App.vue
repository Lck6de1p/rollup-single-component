<template>
  <div id="app">
    <cmp-title title="123" />
  </div>
</template>

<script>
import "@/packages/cmp-title";

export default {
  name: "app",
  data() {
    return {
      isload: false,
    };
  },
};
</script>
