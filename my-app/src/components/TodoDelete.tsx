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
interface TodoDeleteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  todo: any;
  todos: { id: number; name: string; checked: boolean }[];
  setTodos: (todos: { id: number; name: string; checked: boolean }[]) => void;
  checked: boolean;
  onRemove: Function;
  index: number;
}

export function TodoDelete({
  open,
  onOpenChange,
  todos,
  setTodos,
  todo,
  onRemove,
  index,
}: TodoDeleteProps) {
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
          <AlertDialogAction className="bg-red-600" onClick={onRemove}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
