import React, { useCallback } from "react";
import { InputWithButton } from "@/components/Search";
import { TodoCreate } from "@/components/TodoCreate";
import { useState } from "react";
import { MenuButton } from "@/components/MenuButton";
import { CheckboxDemo } from "@/components/Checkbox";

export default function Home() {
  // const [selectedTodo, setSelectedTodo] = useState(null);
  const [todos, setTodos] = useState<
    { id: number; name: string; checked: boolean }[]
  >([]);

  const handleAddTodo = (newTodo: { id: number; name: string }) => {
    setTodos([...todos, { ...newTodo, checked: false }]);
  };

  const handleCheckboxChange = (id: number) => {
    setTodos((prevArtists) =>
      prevArtists.map((artist) =>
        artist.id === id ? { ...artist, checked: !artist.checked } : artist,
      ),
    );
  };

  // const onChangeSelectedTodo = (todo) => {
  //   selectedTodo(todo);
  // };

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
                <input
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => handleCheckboxChange(todo.id)}
                />
                {todo.name}
              </div>
              <MenuButton todo={todo.name} todos={todos} setTodos={setTodos} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
