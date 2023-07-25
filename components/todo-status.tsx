import { Status } from "@/app/types/todo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TodoStatus({
  id,
  status,
  onUpdateStatus,
}: {
  id: string;
  status: Status;
  onUpdateStatus: (id: string, status: Status) => void;
}) {
  return (
    <Select
      defaultValue={Status.Initialized}
      value={status}
      onValueChange={(v) => onUpdateStatus(id, v as Status)}
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
