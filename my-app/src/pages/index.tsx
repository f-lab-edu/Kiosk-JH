import React, { useCallback } from "react";
import { InputWithButton } from "@/components/Search";
import { TodoCreate } from "@/components/TodoCreate";
import { useState } from "react";
import { MenuButton } from "@/components/MenuButton";
import { CheckboxDemo } from "@/components/Checkbox";

export default function Home() {
  const [todos, setTodos] = useState<
    { id: number; name: string; checked: boolean }[]
  >([]);

  const TodoReducer = ({ state, action }: any) => {
    switch (action.type) {
      case "TODO_CREATE":
        return todos.concat(action.todo);
      case "TODO_DELETE":
        return todos.filter((todo) => todo.id !== action.id);
      case "TODO_EDIT":
        return todos.map((todo) =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
        );
      default:
        return state;
    }
  };

  const handleAddTodo = (newTodo: { id: number; name: string }) => {
    setTodos([...todos, { ...newTodo, checked: false }]);
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
            artists={todos}
            setArtists={setTodos}
          />
        </div>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
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
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
