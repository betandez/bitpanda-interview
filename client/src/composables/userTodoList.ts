import { ref, onMounted } from '@vue/composition-api';

import fetchTodoList from '../services/Tasks';

export default function useTodoList() {
  const todoList = ref({});
  const getTodoList = async () => {
    todoList.value = await fetchTodoList();
  };

  onMounted(getTodoList);
  return {
    todoList,
    getTodoList,
  };
}
