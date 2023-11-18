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
import { Todo } from "@/pages";

interface MenuButtonProps {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export function MenuButton({ todo, setTodos }: MenuButtonProps) {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const todoId = todo.id;

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
      <TodoDelete
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        onRemove={() => {
          setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todoId));
        }}
      />
      <TodoEdit
        open={editOpen}
        onOpenChange={setEditOpen}
        onEdit={(newName: string) => {
          setTodos((prevTodos) =>
            prevTodos.map((t) =>
              t.id === todoId ? { ...t, name: newName } : t,
            ),
          );
        }}
        oldName={todo.name}
      />
    </>
  );
}
