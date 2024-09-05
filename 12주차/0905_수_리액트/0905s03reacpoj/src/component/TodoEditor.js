import React from "react";

const TodoEditor = () => {
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 </h4>
      <div className="editor_wrapper">
        <input placeholder="새로운 Todo..." />
        <botton>추가</botton>
      </div>
    </div>
  );
};

export default TodoEditor;
