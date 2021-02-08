import { Ref, ref } from '@vue/composition-api';

import { putTodo, Todo } from '../services/Todo';

interface useTodoUpdatedObject {
  todoUpdated: Ref;
  updateTodo: () => Promise<void>;
}

export default function useTodoUpdater(todo: string, checked: boolean): useTodoUpdatedObject {
  const todoUpdated = ref({});
  const updateTodo = async (): Promise<void> => {
    todoUpdated.value = (await putTodo(todo, checked)) as Todo;
  };

  return {
    todoUpdated,
    updateTodo,
  };
}
