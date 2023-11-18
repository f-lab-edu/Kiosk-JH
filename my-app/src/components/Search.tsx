import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Search({ text, setText }: any) {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="Search"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
