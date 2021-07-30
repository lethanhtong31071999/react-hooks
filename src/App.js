import "./App.scss";
import ColorBox from "./components/BoxColor";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";

function App() {
  const initialState = [
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ];
  const [todoList, setTodoList] = useState(initialState);
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  // Function of Box
  function handleOnTodoClick(todo) {
    const index = todoList.findIndex(function (x) {
      return x.id === todo.id;
    });
    todoList.splice(index, 1);
    const cloneTodoList = [...todoList];

    setTodoList(cloneTodoList);
  }

  // Function of TODO
  function handleOnTodoSubmit(formValues) {
    console.log(formValues);

    const cloneTodoList = [...todoList];

    cloneTodoList.push({
      id: cloneTodoList.length + 1,
      title: formValues["title"],
    });
    setTodoList(cloneTodoList);
  }

  // Function of PostList
  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?_limit=${filters["_limit"]}&_page=${filters["_page"]}`;
        console.log(requestUrl);
        const response = await fetch(requestUrl);
        const responseJSON = response.json();
        const { data, pagination } = await responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPostList();
  }, [filters]);

  // Function for Pagination
  function handlePagination(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  return (
    <div className="app">
      <h1>Welcome to React Hooks</h1>

      <h2>Color Box Example</h2>
      <ColorBox />

      <h2>Todo List Example</h2>
      <TodoForm onTodoSubmit={handleOnTodoSubmit} />
      <TodoList todoList={todoList} onTodoClick={handleOnTodoClick} />

      <h2>Post List Example</h2>
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePagination} />
    </div>
  );
}

export default App;
