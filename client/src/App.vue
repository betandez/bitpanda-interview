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
        v-for="(item, i) in todoList.items",
        :item="item",
        :isLast="i === todoList.items.length - 1"
        :updateHandler="updateList",
        :deleteHandler="updateList",
        :key="item._id"
      )
    .pagination-container
      pagination(
        @change-page="getNewPage"
        v-if="todoList.meta",
        :hasPrevPage="todoList.meta.hasPrevPage",
        :hasNextPage="todoList.meta.hasNextPage",
        )
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from '@vue/composition-api';

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

    const currentSearchQuery = ref('');
    const updateList = async () => fetchTodoList(currentSearchQuery);

    const fetchSearchQuery = async (query: Ref<string>) => {
      await fetchTodoList(query);
      currentSearchQuery.value = query.value;
    };

    const submitTodoDescription = async (todoDescription: Ref) => {
      const newTodo = await createTodo(todoDescription);

      if (newTodo) await updateList();
    };

    const getNewPage = async (prev: boolean) => {
      let { page } = todoList.value.meta;

      if (prev) page -= 2;

      await fetchTodoList(currentSearchQuery, page);
    };

    return {
      todoList,
      fetchTodoList,
      fetchSearchQuery,
      getNewPage,
      todo,
      submitTodoDescription,
      updateList,
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
  align-items: center;
  flex-flow: column;
  border-radius: $main-border-radius;
  border: 2px solid $tertiary-color;
  font-size: 1rem;
  color: $secondary-color;
  background-color: $primary-color;

  &__error {
    font-size: 1.5rem;
    font-style: italic;
    color: $negative-color;
    margin-top: 5rem;
  }

  &__msg {
    margin-top: 5rem;
    font-style: italic;
    color: $positive-color;
  }
}

.pagination-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
