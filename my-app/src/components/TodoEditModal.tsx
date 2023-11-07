import React, { useState, useEffect } from "react";
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
  onToggle: any;
  onChangeSelectedTodo: any;
  selectedTodo: any;
}

export function TodoEditModal({
  open,
  onOpenChange,
  todos,
  setTodos,
  todo,
  onToggle,
  onChangeSelectedTodo,
  selectedTodo,
}: TodoEditModalProps) {
  const [editTodo, setEditTodo] = useState(todo.name);
  const [editingTask, setEditingTask] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");
  const { id, name, checked } = todo;
  const todoValue = todos.map((item) => {
    if (item.id === todo.id) {
      return todo.name;
    }
  });

  const handleSave = () => {
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, name: editTodo } : item,
    );

    setTodos(updatedTodos);
    onOpenChange(false);
  };

  useEffect(() => {
    if (selectedTodo) {
      setEditTaskText(selectedTodo.text);
    }
  }, []);
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
              placeholder={todoValue}
              onChange={(e) => setEditTodo(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
