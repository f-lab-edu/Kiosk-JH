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

interface Todo {
  id: number;
  name: string;
  checked: boolean;
}

interface TodoDeleteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  // todo: any;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  // checked: boolean;
  index: number;
}

export function TodoDelete({
  open,
  onOpenChange,
  todos,
  setTodos,
  // todo,
  index,
}: TodoDeleteProps) {
  // const onRemove = () => {
  //   if (todos && todos.filter) {
  //     let value = todos.filter;
  //     const newTodos = todos.filter((_, _index: number) => index != _index);
  //     setTodos(newTodos);
  //     // 이제 value를 사용할 수 있습니다.
  //   } else {
  //     console.log("filter 프로퍼티를 사용할 수 없습니다.");
  //     // 필터 프로퍼티가 존재하지 않거나 myObject가 정의되지 않았을 때 수행할 작업
  //   }
  // };
  const onRemove = () => {
    const newTodos = todos.filter((_, _index: number) => index != _index);
    setTodos(newTodos);
  };

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
