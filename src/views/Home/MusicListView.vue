<template>
  <div class="expandable-module">
    <div class="content">
      <h3>热门推荐</h3>
      <slot></slot>
      <div class="song-list">
        <div class="song">
          <img src="/image/ruomeng.jpg" alt="Song 1">
          <p class="song-name">若梦</p>
          <p class="artist-name">周深</p>
        </div>

        <div class="song">
          <img src="/image/long.webp" alt="Song 2">
          <p class="song-name">笼</p>
          <p class="artist-name">张碧晨</p>
        </div>

        <div class="song">
          <img src="/image/xuexie.jpg" alt="Song 3">
          <p class="song-name">续写</p>
          <p class="artist-name">单依纯</p>
        </div>

        <div class="song">
          <img src="/image/tashuo.jpg" alt="Song 4">
          <p class="song-name">她说</p>
          <p class="artist-name">林俊杰</p>
        </div>

        <div class="song">
          <img src="/image/wangzhaojun.jpeg" alt="Song 4">
          <p class="song-name">王招君</p>
          <p class="artist-name">任素汐</p>
        </div>

        <div class="song">
          <img src="/image/xiangyunduan.jpeg" alt="Song 4">
          <p class="song-name">向云端</p>
          <p class="artist-name">黄绮珊</p>
        </div>

       
      </div>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.expandable-module {
  width: calc(100% - 17%);
  position: fixed;
  top: 0;
  left: 16%;
}

.content {
  padding-left: 1.5%;
  border: 1vw solid white;
  background-color: white;
  font-size: 1.3vw;
}

.song-list {
  display: flex;
  justify-content: space-between;
  margin-top: 0.8vw;
}

.song {
  text-align: left;
}

.song img {
  width: 12vw; 
  height: 12vw; 
  object-fit: cover;
  border-radius: 10px; 
  transition: transform 0.3s, box-shadow 0.3s; 
  box-shadow: 5px 5px 5px 5px rgba(156, 156, 157, 0.1);
}

.song-name{
  margin-top: 0vw; 
  color:#727679;
  font-size: 1.1vw;
}

.artist-name{
    margin-top: -1vw;
    font-size: 0.9vw;
    color:#9d9e9f;
}

</style>
