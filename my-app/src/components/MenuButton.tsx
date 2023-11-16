import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PencilIcon from "./Pencil";
import TrashIcon from "./TrashIcon";
import DatIcon from "./DatIcon";
import { TodoEdit } from "./TodoEdit";
import { TodoDelete } from "./TodoDelete";
import { useState } from "react";

export function MenuButton({
  todo,
  todos,
  setTodos,
  // onToggle,
  // onChangeSelectedTodo,
  // selectedTodo,
  index, // key,
}: any) {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="border-none bg-white" variant="outline">
            <DatIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-24">
          <DropdownMenuItem className="text-red-700">
            <TrashIcon />
            <span className="button" onClick={() => setDeleteOpen(true)}>
              Delete
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PencilIcon />
            <span className="button" onClick={() => setEditOpen(true)}>
              Edit
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {todos.map((todo: any) => (
        <TodoDelete
          open={deleteOpen}
          onOpenChange={setDeleteOpen}
          todos={todos}
          setTodos={setTodos}
          index={index}
        />
      ))}
      {todos.map((todo: any) => (
        <TodoEdit
          key={todo.id}
          open={editOpen}
          onOpenChange={setEditOpen}
          todos={todos}
          setTodos={setTodos}
          todo={todo}
          // index={index}
          // checked
          // onToggle={onToggle}
          // onChangeSelectedTodo={onChangeSelectedTodo}
          // selectedTodo={selectedTodo}
        />
      ))}
    </>
  );
}
