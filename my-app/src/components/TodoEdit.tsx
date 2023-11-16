import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface TodoEditModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  todos: { id: number; name: string; checked: boolean }[];
  setTodos: (todos: { id: number; name: string; checked: boolean }[]) => void;
  todo: any;
}

export function TodoEdit({
  open,
  onOpenChange,
  todos,
  setTodos,
  todo,
}: TodoEditModalProps) {
  const [editTodo, setEditTodo] = useState(todo.name);

  // const todoValue = todos
  //   .filter((item) => item.id === todo.id)
  //   .map((item) => item.name)
  //   .toString();
  // console.log(`todoValue: ${todoValue}`);

  const handleSave = () => {
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, name: editTodo } : item,
    );
    setTodos(updatedTodos);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="col-start-1 col-end-7 grid">
            <Input
              type="text"
              value={editTodo}
              placeholder="Todo"
              onChange={(e) => setEditTodo(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Edit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
