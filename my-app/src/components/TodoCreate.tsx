import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Plus } from "lucide-react";

interface Todo {
  id: number;
  name: string;
}

interface TodoCreateProps {
  onAddTodo: (todo: Todo) => void;
  artists: Todo[];
  setArtists: React.Dispatch<React.SetStateAction<Todo[]>>;
}

let nextId = 0;

export function TodoCreate({
  onAddTodo,
  artists,
  setArtists,
}: TodoCreateProps) {
  const [name, setName] = useState("");
  const handleAddTodo = () => {
    if (name.trim() !== "") {
      const newTodo = { id: nextId++, name: name };
      setArtists([...artists, newTodo]);
      onAddTodo(newTodo);
      setName("");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Plus className="h-24 w-24 text-white" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="col-start-1 col-end-7 grid">
            <Input
              type="text"
              placeholder="Type your todo here"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleAddTodo}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
