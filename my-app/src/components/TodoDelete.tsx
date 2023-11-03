import { useCallback } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

// interface TodoDeleteProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   todos: { id: number; name: string; checked: boolean }[];
//   setTodos: (todos: { id: number; name: string; checked: boolean }[]) => void;
//   todo: any;
//   todoValue: any;
//   id: number;
// }
interface Todo {
  id: number;
  name: string;
  checked: boolean;
}

interface TodoDeleteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  todo: Todo;
  todos: { id: number; name: string; checked: boolean }[];
  setTodos: (todos: { id: number; name: string; checked: boolean }[]) => void;
  checked: boolean;
  onRemove: any;
}

export function TodoDelete({
  open,
  onOpenChange,
  todos,
  setTodos,
  todo,
  onRemove,
}: TodoDeleteProps) {
  if (!todo) {
    // todo가 없을 때의 처리
    return null; // 또는 다른 처리
  }
  const { id, name, checked } = todo;
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600"
            onClick={() => onRemove(id)}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
