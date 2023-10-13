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
import { useState } from "react";

export function MenuButton() {
  const [editOpen, setEditOpen] = useState(false);

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
            <span>Delete</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PencilIcon />
            <span className="btn" onClick={() => setEditOpen(true)}>
              Edit
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TodoEditModal open={editOpen} onOpenChange={setEditOpen} />
    </>
  );
}
