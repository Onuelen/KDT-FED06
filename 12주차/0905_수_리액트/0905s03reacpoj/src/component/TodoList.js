import React, { useState } from "react";
import "./TodoList.css";
import Todoitem from "./Todoitem";

const TodoList = ({ todo }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase)
        );
  };
  return (
    <div className="TodoList">
      <h4>Todo List🎨</h4>
      <input className="searchbar" placeholder="검색어를 입력하세요" />
      <div className="list_wrapper">
        {/* {todo.map((it) => {
          <div>{it.content}</div>;
        })} */}
        {getSearchResult().map((it) => (
          <Todoitem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
