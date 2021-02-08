import { ref, onMounted, Ref } from '@vue/composition-api';

import { getTodoList, TodoList } from '../services/Todo';

interface useTodoListObject {
  todoList: Ref;
  fetchTodoList: () => Promise<void>;
}

export default function useTodoList(): useTodoListObject {
  const todoList = ref({});
  const fetchTodoList = async (): Promise<void> => {
    todoList.value = (await getTodoList()) as TodoList;
  };

  onMounted(fetchTodoList);
  return {
    todoList,
    fetchTodoList,
  };
}
