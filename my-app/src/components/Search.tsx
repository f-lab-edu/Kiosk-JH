import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="Search" placeholder="Search" />
      <Button className='bg-[#0F172A]'type="submit">Search</Button>
    </div>
  )
}