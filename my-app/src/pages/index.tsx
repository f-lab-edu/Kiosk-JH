import React, { useState, useCallback } from "react";
import { InputWithButton } from "@/components/Search";
import { TodoCreate } from "@/components/TodoCreate";
import { MenuButton } from "@/components/MenuButton";
import { CheckboxDemo } from "@/components/Checkbox";

export default function Home() {
  const [todos, setTodos] = useState<
    { id: number; name: string; checked: boolean }[]
  >([]);

  const [selectedTodo, setSelectedTodo] = useState(null);

  const onToggle = useCallback(
    (id: number) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  // const TodoReducer = ({ todos, action }: any) => {
  //   switch (action.type) {
  //     case "TODO_CREATE":
  //       return todos.concat(action.todo);
  //     case "TODO_DELETE":
  //       return todos.filter((todo) => todo.id !== action.id);
  //     case "TODO_EDIT":
  //       return todos.map((todo) =>
  //         todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
  //       );
  //     default:
  //       return todos;
  //   }
  // };

  function handleAddTodo(newTodo: { id: number; name: string }) {
    setTodos([...todos, { ...newTodo, checked: false }]);
  }

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };
  return (
    <>
      <div className="relative mx-auto h-screen max-w-[430px] bg-white p-4">
        <p className="ml-5 text-2xl font-bold text-slate-800">Todo List</p>
        <div className="mx-5 mt-5">
          <InputWithButton />
        </div>
        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
          <TodoCreate
            onAddTodo={handleAddTodo}
            value={todos}
            setValue={setTodos}
          />
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li
              todo={todo}
              index={index}
              // key={todo.id}
              key={index}
              setTodos={setTodos}
              className="flex items-center justify-between gap-4"
            >
              <div className="ml-5 flex-1">
                <div className="flex items-center space-x-2">
                  <CheckboxDemo />
                  <span>{todo.name}</span>
                </div>
              </div>
              <MenuButton
                checked={Boolean}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                onToggle={onToggle}
                onChangeSelectedTodo={onChangeSelectedTodo}
                selectedTodo={selectedTodo}
                index={index}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
