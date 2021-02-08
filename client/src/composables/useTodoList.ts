import { ref, onMounted, Ref } from '@vue/composition-api';

import { getTodoList, TodoList } from '../services/Todo';

interface useTodoListObject {
  todoList: Ref<TodoList>;
  fetchTodoList: (description?: Ref, pageNumber?: number) => Promise<void>;
}

export default function useTodoList(): useTodoListObject {
  const todoList = ref({} as TodoList);

  const fetchTodoList = async (description?: Ref, pageNumber?: number): Promise<void> => {
    todoList.value = (await getTodoList(description?.value, pageNumber)) as TodoList;
  };

  onMounted(fetchTodoList);
  return {
    todoList,
    fetchTodoList,
  };
}
