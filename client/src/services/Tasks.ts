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

async function fetchTodoList(): Promise<TodoList | boolean> {
  try {
    const response = await fetch(BASE_URL);
    const todoList: TodoList = await response.json();

    return todoList;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default fetchTodoList;
