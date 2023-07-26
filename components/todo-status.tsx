import { Status } from "@/types/todo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { state } from "@/store/todo";

export default function TodoStatus({
  id,
  status,
}: {
  id: string;
  status: Status;
}) {
  const handleChangeStatus = (status: Status) => {
    state.todos.set((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status,
          };
        }
        return todo;
      })
    );
  };
  return (
    <Select
      defaultValue={Status.Initialized}
      value={status}
      onValueChange={(v) => handleChangeStatus(v as Status)}
    >
      <SelectTrigger>
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="initialized">Initialized</SelectItem>
        <SelectItem value="progress">Progress</SelectItem>
        <SelectItem value="done">Done</SelectItem>
      </SelectContent>
    </Select>
  );
}
