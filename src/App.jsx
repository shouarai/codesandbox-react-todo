import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //input入力する値をstate化
  const [todoText, setTodoText] = useState();
  // console.log(todoText);
  //incompleteTodos変数　　setIncompleteTOdos関数→incompleteTodosを更新するための関数
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいいい"
  ]);

  const [comleteTodos, setCompleteTodos] = useState(["うううう"]);

  //onChangeはeventを引数とする
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    console.log(newTodos);
    //incompleteTodos変数を更新するための関数
    setIncompleteTodos(newTodos);
    //todoText変数を更新するための関数
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder=" TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {comleteTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
