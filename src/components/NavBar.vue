<template>
  <div class="side-navigation">
    <div class="logo">
      
    </div>
    <router-link exact to="/">首页</router-link>
    <router-link to="/my">我的</router-link>
    <router-link to="/search">搜索</router-link>
  
  </div>
</template>

<script>
export default {
  name: 'SideNavigation',
};
</script>

<style scoped>
.side-navigation {
  width: 200px;
  height: 100%;
  background-color: #1d2d3c;
  color: white;
  padding: 20px;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed; 
  top: 0;
  left: 0;
}

.logo img {
  width: 80%;
  margin-bottom: 20px;
}

.side-navigation a {
  padding: 10px;
  color: #626e7a;
  text-decoration: none;
  transition: color 0.3s ease; 
  
}

.side-navigation a.active {
  color: #e74c3c; /* 设置活跃链接的背景颜色 */
}

.side-navigation a:hover {
  background-color: #34495e;
}
</style>
