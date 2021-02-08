import { ref, Ref } from '@vue/composition-api';

import { postTodo, Todo } from '../services/Todo';

interface userTodoCreatorObject {
  todo: Ref<Todo>;
  createTodo: (description: Ref) => Promise<Todo>;
}

export default function userTodoCreator(): userTodoCreatorObject {
  const todo = ref({} as Todo);

  const createTodo = async (description: Ref): Promise<Todo> => {
    todo.value = (await postTodo(description.value)) as Todo;

    return todo.value;
  };

  return {
    todo,
    createTodo,
  };
}
