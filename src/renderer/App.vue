<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark" class="top-bar">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link tag="span" :to="{name: 'today-page'}">
              Today
            </router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link tag="span" :to="{name: 'history-page'}" >
              History
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <b-navbar-brand @click="closeApp" href="#">Exit</b-navbar-brand>
    </b-navbar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'twentyfive',
    data() {
      return {
      };
    },
    methods: {
      closeApp() {
        this.$electron.remote.app.quit();
      },
    },
  };
</script>

<style>
  /* CSS */
  .content {
    padding: 20px;
    padding-top: 80px;
  }
  .top-bar {
    position: fixed;
    width: 100%;
    z-index: 9000;
  }
</style>
