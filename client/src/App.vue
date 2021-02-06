<template lang="pug">
  #app.todo-app
    todo-list
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import TodoList from './components/TodoList.vue';

export default defineComponent({
  name: 'App',
  components: {
    'todo-list': TodoList,
  },
  setup() {
    // utilise todo-bitpanda-server to get data

    return {
      message: 'Todo list should be here',
    };
  },
});
</script>

<style lang="scss">
@import './sass/globals.scss';

.todo-app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $bg-color;
}
</style>
