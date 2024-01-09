<template>
  <div>
    <!-- 导航栏 -->
    <div>
      <NavBar />
    </div>

    <!-- 图片和音乐播放器容器 -->
    <div class="center-container">
      <!-- 图片 -->
      <img src="/image/fuguang.png" alt="Music Image" class="center-image">

      <!-- 间距 -->
      <div class="spacer"></div>

      <!-- 音乐播放器 -->
      <audio controls>
        <source :src="musicUrl" type="audio/mp3">
        您的浏览器不支持音频播放。
      </audio>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      musicUrl: "https://m801.music.126.net/20240109135750/2da44cd80dfda8612a929b6016f813a5/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32407770950/f487/a2dd/4965/b425a706f22e4c733c07d428571217fe.m4a" // 替换为您实际的音乐链接
    };
  }
};
</script>

<style>
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 10%;
}

.center-image {
  max-width: 100%;
  max-height: 100%;
  transform: scale(2);
}

.spacer {
  height: 100px;
}
</style>
