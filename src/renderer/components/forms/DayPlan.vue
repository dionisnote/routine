<template>
  <b-list-group>
    <transition-group name="list">
      <div v-for="(item, i) in itemsList" :key="i">
        <b-list-group-item >
          <b-row>
            <b-col>
              <b-row>
                <b-col>
                  <b-button size="sm" variant="default" @click="upItem(i)">
                    up
                  </b-button>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-button size="sm" variant="default" @click="downItem(i)">
                    down
                  </b-button>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="6">
              <span :class="{done : item.done}">{{item.title}}</span>
            </b-col>
            <b-col v-if="item.done">
              &nbsp;
            </b-col>
            <b-col v-if="item.done">
              <b-button variant="success"  disabled>Done</b-button>
            </b-col>
            <b-col v-if="!item.done">
              <b-button variant="info">Go</b-button>
            </b-col>
            <b-col v-if="!item.done">
              <b-button variant="dark">Defer</b-button>
            </b-col>
            <b-col>
              <b-button variant="danger" @click="deleteItem(i)">Delete</b-button>
            </b-col>
          </b-row>
        </b-list-group-item>
      </div>
    </transition-group>
    <b-list-group-item>
      <b-row>
        <b-col cols="10">
          <b-input v-model="newItemTitle"></b-input>
        </b-col>
        <b-col cols="1">
          <b-button variant="warning" @click="createNewTask">Create</b-button>
        </b-col>
      </b-row>
    </b-list-group-item>
  </b-list-group>
</template>
<script>
  export default {
    name: 'day-plan',
    data() {
      return {
        newItemTitle: '',
        itemsList: [
          {
            title: 'Item 1',
            done: true,
          },
          {
            title: 'Item 2',
            done: false,
          },
          {
            title: 'Item 3',
            done: false,
          },
          {
            title: 'Item 4',
            done: false,
          },
          {
            title: 'Item 5',
            done: false,
          },
        ],
      };
    },
    methods: {
      createNewTask() {
        if (this.newItemTitle) {
          const newTask = {
            title: this.newItemTitle,
            done: false,
          };
          this.itemsList.push(newTask);
          this.newItemTitle = '';
        }
      },
      deleteItem(i) {
        this.itemsList.splice(i, 1);
      },
      upItem(i) {
        let currentItem = this.itemsList[i];
        this.itemsList = this.itemsList.slice().sort((a, b) => {
          if (b === currentItem) {
            currentItem = null;
            return 1;
          }
          return 0;
        });
      },
      downItem(i) {
        let currentItem = this.itemsList[i];
        this.itemsList = this.itemsList.slice()
          .sort((a) => {
            if (a === currentItem) {
              currentItem = null;
              return 1;
            }
            return 0;
          });
      },
    },
  };
</script>
<style>
.done {
  text-decoration: line-through;
}

.list-move {
  transition: all 1s;
}
</style>

