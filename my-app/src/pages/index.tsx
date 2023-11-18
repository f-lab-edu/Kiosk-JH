import React, { useState, useCallback } from "react";
import { Search } from "@/components/Search";
import { TodoCreate } from "@/components/TodoCreate";
import { MenuButton } from "@/components/MenuButton";
import { Checkbox } from "@/components/Checkbox";

export interface Todo {
  id: number;
  name: string;
  checked: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAddTodo(newTodo: { id: number; name: string }) {
    setTodos([...todos, { ...newTodo, checked: false }]);
  }

  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = {
      ...updatedTodos[index],
      checked: !updatedTodos[index].checked,
    };
    setTodos(updatedTodos);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="relative mx-auto h-screen max-w-[430px] bg-white p-4">
        <p className="ml-5 text-2xl font-bold text-slate-800">Todo List</p>
        <div className="mx-5 mt-5">
          <Search text={text} setText={setText} />
        </div>
        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
          <TodoCreate
            onAddTodo={handleAddTodo}
            value={todos}
            setValue={setTodos}
          />
        </div>
        <ul className="mt-6">
          {todos
            .filter((t) => t.name.includes(text))
            .map((todo, index) => (
              <li
                key={todo.id}
                className="flex items-center justify-between gap-4"
              >
                <div className="ml-5 flex-1">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={todo.checked}
                      onCheckedChange={() => handleCheckboxChange(index)}
                    />
                    <span
                      className={
                        todo.checked ? "text-gray-400/50 line-through" : ""
                      }
                    >
                      {todo.name}
                    </span>
                  </div>
                </div>
                <MenuButton todo={todo} setTodos={setTodos} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
