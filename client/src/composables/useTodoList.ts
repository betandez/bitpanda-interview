import { ref, onMounted, Ref } from '@vue/composition-api';

import { fetchTodoList } from '../services/Todo';

interface useTodoListObject {
  todoList: Ref;
  getTodoList: () => Promise<void>;
}

export default function useTodoList(): useTodoListObject {
  const todoList = ref({});
  const getTodoList = async (): Promise<void> => {
    todoList.value = await fetchTodoList();
  };

  onMounted(getTodoList);
  return {
    todoList,
    getTodoList,
  };
}
