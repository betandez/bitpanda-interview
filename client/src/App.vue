<template lang="pug">
  #app.todo-app
    search-bar
    .list
      h1.list__error(v-if="!todoList") ERROR - SERVICES NOT WORKING
      todo(
        v-if="todoList",
        v-for="item in todoList.items",
        :item="item",
        :updateHandler="fetchTodoList",
        :deleteHandler="fetchTodoList",
        :key="item._id"
      )
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import SearchBar from './components/SearchBar.vue';
import Todo from './components/Todo.vue';
import useTodoList from './composables/useTodoList';

export default defineComponent({
  name: 'App',
  components: {
    todo: Todo,
    'search-bar': SearchBar,
  },
  setup() {
    const { todoList, fetchTodoList } = useTodoList();

    return {
      todoList,
      fetchTodoList,
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
  flex-flow: column;
  padding: 1rem 0;
  background-color: $bg-color;
}

.list {
  width: 80%;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  border-radius: $main-border-radius;
  font-size: 1rem;
  color: $secondary-color;
  background-color: $primary-color;

  &__error {
    font-size: 1.5rem;
    font-style: italic;
    color: $negative-color;
  }
}
</style>
