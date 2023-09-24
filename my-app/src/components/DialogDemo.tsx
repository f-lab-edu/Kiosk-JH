import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from 'react'
import { Plus } from 'lucide-react'

interface Todo {
  id: number;
  name: string;
}

interface DialogDemoProps {
  onAddTodo: (todo: Todo) => void;
  artists: Todo[];
  setArtists: React.Dispatch<React.SetStateAction<Todo[]>>;
}



let nextId = 0;

export function DialogDemo({ onAddTodo, artists, setArtists }: DialogDemoProps) {
  const [name, setName] = useState('');
  // const [artists, setArtists] = useState<{ id: number; name: string; }[]>([]);

  const handleAddTodo = () => {
    if (name.trim() !== '') {
      const newTodo = { id: nextId++, name: name };
      setArtists([...artists, newTodo]);
      onAddTodo(newTodo);
      setName('');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Plus className='w-24 h-24 text-white' />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className='grid col-start-1 col-end-7'>
            <Input
            type='text'
            placeholder="Type your todo here"
            value={name}
            onChange={e => setName(e.target.value)}
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
  )
}
