<template>
  <div id="app">
    <cmp-image v-bind="obj" />
  </div>
</template>

<script>
import "@/packages/cmp-image";

export default {
  name: "app",
  data() {
    return {
      obj: {
        LRBorder: 200,
        TBBorder: 0,
        backgroundColor: "#000",
        hasRadius: "1",
        borderStyle: "2",
        imgBorder: 12,
        imgs: [
          {
            id: "13koxepkz9",
            imgUrl:
              "https://zhongyan.duibatest.com.cn/zy-manage/upload/downloadOss?&objectName=111/1644832560046zhongYanFile2a0e1476a3e147afa4d5898063cfff42",
          },
          {
            id: "13koxepk1z9",
            imgUrl:
              "https://zhongyan.duibatest.com.cn/zy-manage/upload/downloadOss?&objectName=111/1644832560046zhongYanFile2a0e1476a3e147afa4d5898063cfff42",
          },
        ],
      },
    };
  },
};
</script>
