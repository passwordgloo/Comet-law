<script setup>
import { ref, onMounted, unref, onUnmounted } from "vue";
import { Content } from 'vuepress/client'
import Navbar from '@theme/VPNavbar.vue'

const props = defineProps({
  listBanner: {
    type: Array,
    default: () => [
      {
        item: "1",
        index: 1,
        img: 'https://file.iglooblog.top/comet_law/tide.jpg',
        url: 'https://tide.iglooblog.top'
      },
      {
        item: "2",
        index: 2,
        img: 'https://file.iglooblog.top/comet_law/wiki.jpg',
        url:'https://wiki.iglooblog.top'
      },
      {
        item: "3",
        index: 3,
        img: 'https://file.iglooblog.top/comet_law/law.jpg',
        url:'https://law.iglooblog.top'
      },
      {
        item: "4",
        index: 4,
        img: 'https://file.iglooblog.top/comet_law/media.jpg',
        url:'https://media.iglooblog.top'
      }
    ]
  },
  //banner自动播放的间隔时间
  interval: {
    type: Number,
    default: 3000
  },
  //是否自动播放banner
  autoSwitch: {
    type: Boolean,
    default: true
  },
  //banner高度
  setHeight: {
    type: Number,
    default: 1024
  }
})

let tiemr = ref(null);
const switchIndex = ref(0);
const rotationRef = ref();
const indicatorRef = ref();
const description = ref(null); //图片描述
let height = unref(props.setHeight);

//banner播放方式
const addTimer = () => {
  if (props.autoSwitch === true) {
    //自动播放
    tiemr = setInterval(() => {
      switchBanner("right");
    }, props.interval);
  }
};

// 清除定时器
const stopInterval = () => {
  clearInterval(tiemr);
};

//banner文字提示（非必须）
const switchDescription = () => {
  if (props.listBanner) {
    props.listBanner.map((item, index) => {
      if (index === switchIndex.value) {
        description.value = item.description;
      }
    });
  }
};

//鼠标进入停止自动播放（非必须）
const mouseenterEvent = () => {
  stopInterval();
  switchDescription();
};

//鼠标离开自动播放（非必须）
const mouseleaveEvent = () => {
  addTimer();
};

//上一张和下一张图片透明度切换
const changePicture = (num) => {
  for (let i of rotationRef.value) {
    i.style.opacity = "0";
  }
  toBannerBar(num);
  if (rotationRef.value.length !== 0) {
    rotationRef.value[num].style.opacity = "1";
  }
};

//底部小横条颜色切换
const toBannerBar = (val) => {
  for (let i of indicatorRef.value) {
    i.style.backgroundColor = "rgba(221, 221, 221, 0.541)";
  }
  if (indicatorRef.value.length !== 0) {
    indicatorRef.value[val].style.backgroundColor = "#ffffff";
  }
};

//左右切换banner
const switchBanner = (value) => {
  if (value === "right") {
    switchIndex.value++;
    if (switchIndex.value === props.listBanner.length) {
      switchIndex.value = 0;
    }
  } else {
    switchIndex.value--;
    if (switchIndex.value === -1) {
      switchIndex.value = props.listBanner.length - 1;
    }
  }
  changePicture(switchIndex.value);
  switchDescription();
};

//底部横条切换banner
const swatchIndicator = (value) => {
  switchIndex.value = value;
  changePicture(switchIndex.value);
  switchDescription();
};

//banner链接跳转（（非必须）
const bannerLink = () => {
  if (props.listBanner) {
    props.listBanner.map((item, index) => {
      if (index === switchIndex.value && item.url !== "" && item.url !== null) {
        window.location.href = item.url;
      }
    });
  }
};

onMounted(() => {
  addTimer();
});
onUnmounted(() => {
  stopInterval();
});   
</script>

<template>
  <Navbar/>
  <div class="banner-container" :style="{ height: height + 'px' }" @mouseenter="mouseenterEvent"
    @mouseleave="mouseleaveEvent">
    <ul class="fade-banner">
      <li class="rotation-banner" ref="rotationRef" :style="{ height: height + 'px' }" v-for="(item, index) in listBanner"
        :key="index">
        <img class="banner-img" @click="bannerLink" :src="item.img" :title="description" />
      </li>
    </ul>
    <span class="left-button" @click="switchBanner('left')"><img src="https://file.iglooblog.top/comet_law/left.webp" class="icon" /></span>
    <span class="right-button" @click="switchBanner('right')"><img src="https://file.iglooblog.top/comet_law/right.webp" class="icon" /></span>
    <ul class="banner-indicator">
      <span v-for="index in listBanner.length" :key="index" class="barExternal" @click="swatchIndicator(index - 1)">
        <li ref="indicatorRef" class="default-indicator" :class="{ 'active-indicator': index - 1 === 0 }"></li>
      </span>
    </ul>
  </div>
  <main class="custom-banner">
      <Content />
</main>
</template>

<style lang="scss" scoped>
@use '../styles/banner' as *;
</style>
