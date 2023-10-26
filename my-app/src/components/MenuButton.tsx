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
import { TodoEditModal } from "./TodoEditModal";
import { TodoDelete } from "./TodoDelete";
import { useState } from "react";

export function MenuButton({ todo, todos, setTodos }: any) {
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
          <DropdownMenuItem>
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
      <TodoDelete open={deleteOpen} onOpenChange={setDeleteOpen} />
      <TodoEditModal
        open={editOpen}
        onOpenChange={setEditOpen}
        defaultValue={todo.name}
        todos={todos}
        setTodos={setTodos}
        todo={todo}
        checked
      />
    </>
  );
}
