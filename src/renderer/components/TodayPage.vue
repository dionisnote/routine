<template>
  <div>
    <b-row>
        <b-col>
          <h1>Today</h1>  
        </b-col>
    </b-row>
    <b-row>
        <b-col cols="5">
          <b-row>
            <b-col>
              <h4>Tasks List:</h4>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <day-plan>
              </day-plan>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <b-col>
              <h4>Actions Log:</h4>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <day-actions></day-actions> 
            </b-col>
          </b-row>
        </b-col>
    </b-row>
  </div>
</template>

<script>
  import DayPlan from '@/components/forms/DayPlan.vue';
  import DayActions from '@/components/forms/DayActions.vue';

  export default {
    name: 'today-page',
    components: {
      DayPlan,
      DayActions,
    },
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
    },
  };
</script>
