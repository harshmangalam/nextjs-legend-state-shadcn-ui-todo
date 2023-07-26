import { observable } from "@legendapp/state";
import { Todo } from "@/types/todo";

export const state = observable<{ todos: Todo[] }>({
  todos: [],
});
