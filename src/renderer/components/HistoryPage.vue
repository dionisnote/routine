<template>
  <div>
    <b-row>
        <b-col>
          <h1>History</h1>  
        </b-col>
    </b-row>
    <b-row>
        <b-col>
          <router-link :to="{name: 'today-page'}" >
            Today
          </router-link> 
        </b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
    </b-row>
  </div>

</template>

<script>
  export default {
    name: 'history-page',
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
    },
  };
</script>
