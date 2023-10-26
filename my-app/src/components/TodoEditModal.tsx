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
  defaultValue: string;
  todos: { id: number; name: string; checked: boolean }[];
  setTodos: (todos: { id: number; name: string; checked: boolean }[]) => void;
  todo: any;
  checked: boolean;
}

export function TodoEditModal({
  open,
  onOpenChange,
  defaultValue,
  todos,
  setTodos,
  todo,
  checked,
}: TodoEditModalProps) {
  const [editTodo, setEditTodo] = useState("");
  const todoValue = todos.map((item) => {
    if (item.id === todo.id) {
      return todo.name;
    }
    // return item.name;
  });

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
              placeholder={todoValue}
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
