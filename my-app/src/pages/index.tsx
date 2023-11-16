import React, { useState, useCallback } from "react";
import { InputWithButton } from "@/components/Search";
import { TodoCreate } from "@/components/TodoCreate";
import { MenuButton } from "@/components/MenuButton.1";
import { CheckboxDemo } from "@/components/Checkbox";

export default function Home() {
  const [todos, setTodos] = useState<
    { id: number; name: string; checked: boolean }[]
  >([]);

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
              key={todo.id}
              setTodos={setTodos}
              className="flex items-center justify-between gap-4"
            >
              <div className="ml-5 flex-1">
                <div className="flex items-center space-x-2">
                  <CheckboxDemo
                    todo={todo}
                    checked={todo.checked} // todo.이 필요하네
                    onCheckedChange={() => handleCheckboxChange(index)}
                  />
                  {todo.checked ? ( // 이것도
                    <span className="text-gray-400/50 line-through">
                      {todo.name}
                    </span>
                  ) : (
                    <span>{todo.name}</span>
                  )}
                </div>
              </div>
              <MenuButton
                checked={Boolean}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                index={index}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
