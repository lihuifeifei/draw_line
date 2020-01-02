<template>
  <div id="app">
    <el-container  direction="vertical">
      <keep-alive>
        <el-menu
                :default-active="this.$route.path"
                router
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
          <el-menu-item
                  v-for="(item,i) in navList"
                  :key="i"
                  :index="item.name">
            {{item.navItem}}
          </el-menu-item>
        </el-menu>
      </keep-alive>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        navList:[
          {name:'/various_10',navItem:'10个服务'},
          {name:'/various_30',navItem:'30个服务'},
          {name:'/various_50',navItem:'50个服务'},
        ]
      };
    },
    methods: {

    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
