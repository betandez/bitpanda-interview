<template lang="pug">
  #app.todo-app
    todo-list(:list="todoList.items")
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import TodoList from './components/TodoList.vue';
import useTodoList from './composables/userTodoList';

export default defineComponent({
  name: 'App',
  components: {
    'todo-list': TodoList,
  },
  setup() {
    const { todoList, getTodoList } = useTodoList();

    return {
      todoList,
      getTodoList,
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
