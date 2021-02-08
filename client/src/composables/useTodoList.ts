import { ref, onMounted, Ref } from '@vue/composition-api';

import { getTodoList, TodoList } from '../services/Todo';

interface useTodoListObject {
  todoList: Ref;
  fetchTodoList: (description?: Ref) => Promise<void>;
}

export default function useTodoList(): useTodoListObject {
  const todoList = ref({});

  const fetchTodoList = async (description?: Ref): Promise<void> => {
    todoList.value = (await getTodoList(description?.value)) as TodoList;
  };

  onMounted(fetchTodoList);
  return {
    todoList,
    fetchTodoList,
  };
}
