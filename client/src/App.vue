<template lang="pug">
  #app.todo-app
    search-bar(@query-submit="fetchSearchQuery")
    .list
      add-todo(@add-todo="submitTodoDescription")
      h1.list__error(v-if="!todoList") ERROR - SERVICES NOT WORKING
      h1.list__msg(
        v-if="todoList.items && todoList.items.length < 1"
        ) List is Empty. Try with an empty search!
      todo(
        v-if="todoList",
        v-for="item in todoList.items",
        :item="item",
        :updateHandler="fetchTodoList",
        :deleteHandler="fetchTodoList",
        :key="item._id"
      )
    .pagination-container
      pagination(
        v-if="todoList.meta",
        :hasPrevPage="todoList.meta.hasPrevPage",
        :hasNextPage="todoList.meta.hasNextPage",
        @change-page="getNewPage"
        )
</template>

<script lang="ts">
import { defineComponent, Ref } from '@vue/composition-api';

import AddTodo from './components/AddTodo.vue';
import Pagination from './components/Pagination.vue';
import SearchBar from './components/SearchBar.vue';
import Todo from './components/Todo.vue';
import useTodoCreator from './composables/useTodoCreator';
import useTodoList from './composables/useTodoList';

export default defineComponent({
  name: 'App',
  components: {
    todo: Todo,
    'search-bar': SearchBar,
    pagination: Pagination,
    'add-todo': AddTodo,
  },
  setup() {
    const { todoList, fetchTodoList } = useTodoList();

    const { todo, createTodo } = useTodoCreator();

    const fetchSearchQuery = async (query: Ref) => {
      await fetchTodoList(query);
    };

    const submitTodoDescription = async (todoDescription: Ref) => {
      const newTodo = await createTodo(todoDescription);

      if (newTodo) await fetchTodoList();
    };

    const getNewPage = async (prev: boolean) => {
      let { page } = todoList.value.meta;

      if (prev) page -= 2;

      await fetchTodoList(undefined, page);
    };

    return {
      todoList,
      fetchTodoList,
      fetchSearchQuery,
      getNewPage,
      todo,
      submitTodoDescription,
    };
  },
});
</script>

<style lang="scss">
@import './sass/globals.scss';

.todo-app {
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 1rem 0;
}

.list {
  width: 100%;
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

.pagination-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}
</style>
