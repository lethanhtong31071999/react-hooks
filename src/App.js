import "./App.scss";
import ColorBox from "./components/BoxColor";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";

function App() {
  const initialState = [
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ];
  const [todoList, setTodoList] = useState(initialState);
  const [postList, setPostList] = useState([]);

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
        const requestUrl =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        console.log("POST API");
      } catch (error) {
        console.log(error);
      }
    }

    // return () => {
    //   console.log("POST API END");
    // };

    fetchPostList();
  }, []);

  useEffect(() => {
    console.log("TEST API");

    return () => {
      console.log("TEST END");
    };
  });

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
    </div>
  );
}

export default App;
