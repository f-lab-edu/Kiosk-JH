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
  todo: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultValue: string;
  todos: { id: number; name: string; checked: boolean }[];
  setTodos: (todos: { id: number; name: string; checked: boolean }[]) => void;
}

export function TodoEditModal({
  open,
  onOpenChange,
  defaultValue,
  todos,
  setTodos,
  todo,
}: TodoEditModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="col-start-1 col-end-7 grid">
            <Input type="text" defaultValue={todos} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
