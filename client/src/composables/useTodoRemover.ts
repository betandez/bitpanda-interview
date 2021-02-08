import { Ref, ref } from '@vue/composition-api';

import { deleteTodo } from '../services/Todo';

interface useTodoRemoverObject {
  isSuccess: Ref<boolean>;
  removeTodo: () => Promise<void>;
}

export default function userTodoRemover(todo: string): useTodoRemoverObject {
  const isSuccess = ref(false);
  const removeTodo = async (): Promise<void> => {
    isSuccess.value = await deleteTodo(todo);
  };

  return {
    isSuccess,
    removeTodo,
  };
}
