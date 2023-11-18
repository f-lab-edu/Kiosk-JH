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
  onEdit: (newName: string) => void;
  oldName: string;
}

export function TodoEdit({
  open,
  onOpenChange,
  onEdit,
  oldName,
}: TodoEditModalProps) {
  const [newName, setNewName] = useState(oldName);

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
              value={newName}
              placeholder="Todo"
              onChange={(e) => setNewName(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              onEdit(newName);
              onOpenChange(false);
            }}
          >
            Edit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
