interface Todo {
  createdAt: string;
  description: string;
  done: boolean;
  updatedAt: string;
  _id: string;
}

interface Meta {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  itemCount: number;
  limit: number;
  nextPage: number;
  offset: number;
  page: number;
  pageCount: number;
  prevPage: number;
}

interface TodoList {
  items: Array<Todo>;
  meta: Meta;
}

const BASE_URL = 'http://localhost:3000/api/v1/todo';

export async function fetchTodoList(): Promise<TodoList | boolean> {
  try {
    const response: Response = await fetch(BASE_URL);
    const todoList: TodoList = (await response.json()) as TodoList;

    return todoList;
  } catch (e) {
    console.error(e);
    return false;
  }
}

export async function updateTodoList(id: string, checked: boolean): Promise<Todo | boolean> {
  try {
    const url = `${BASE_URL}/${id}`;
    const response: Response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(checked),
    });
    const todo = (await response.json()) as Todo;

    return todo;
  } catch (e) {
    console.error(e);
    return false;
  }
}
