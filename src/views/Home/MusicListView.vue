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

       
      </div>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.expandable-module {
  width: calc(100% - 245px);
  position: fixed;
  top: 0;
  left: 245px;
}

.content {
  padding: 15px 40px;
  border: 1px solid white;
  background-color: white;
}

.song-list {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.song {
  text-align: left;
}

.song img {
  width: 180px; 
  height: 180px; 
  object-fit: cover;
}

.song-name{
  margin-top: 1px; 
  color:#727679;
  font-size: 17px;
}

.artist-name{
    margin-top: -13px;
    font-size: 13px;
    color:#9d9e9f;
}

</style>
