<template lang="pug">
  #app.todo-app
    .list
      h1.list__error(v-if="!todoList") ERROR - SERVICES NOT WORKING
      todo(v-if="todoList",v-for="item in todoList.items", :item="item")
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import Todo from './components/Todo.vue';
import useTodoList from './composables/useTodoList';

export default defineComponent({
  name: 'App',
  components: {
    todo: Todo,
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

.list {
  width: 80%;
  min-height: 60vh;
  background-color: $primary-color;
  color: $secondary-color;
  font-size: 1rem;
  border-radius: $main-border-radius;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  &__error {
    color: $negative-color;
    font-size: 1.5rem;
    font-style: italic;
  }
}
</style>
