"use client";

import { enableReactUse } from "@legendapp/state/config/enableReactUse";
import EmptyTodo from "@/components/empty-todo";
import TodoItem from "@/components/todo-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { For, Show, useObservable } from "@legendapp/state/react";
import type { Todo } from "./types/todo";
import { Status } from "./types/todo";

enableReactUse();

export default function Home() {
  const { todos, input } = useObservable<{ todos: Todo[]; input: string }>({
    todos: [],
    input: "",
  });

  const handleSave = () => {
    todos.push({
      id: crypto.randomUUID(),
      status: Status.Initialized,
      text: input.get(),
    });
    input.set("");
  };

  const handleDeleteTodo = (id: string) => {
    todos.set((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateStatus = (id: string, status: Status) => {
    todos.set((todos) =>
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
    <div>
      <section className="flex flex-col gap-y-4 items-center max-w-lg mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary">Todo</h1>
        <p className="text-xl text-muted-foreground">
          Built with Next-13 app router | Legend state | Shadcn-ui
        </p>
      </section>

      <section className="flex w-full max-w-lg  mx-auto items-center space-x-2 justify-center mt-8">
        <Input
          type="text"
          placeholder="Start typing..."
          autoFocus
          value={input.use()}
          onChange={(event) => input.set(event.target.value)}
        />
        <Button onClick={handleSave}>Save</Button>
      </section>

      <section className="mt-8 max-w-lg mx-auto">
        <Show if={todos.length} else={<EmptyTodo />}>
          <div className="flex flex-col gap-y-2">
            <For each={todos}>
              {(todo) => (
                <TodoItem
                  onUpdateStatus={handleUpdateStatus}
                  todo$={todo}
                  onDeleteTodo={handleDeleteTodo}
                />
              )}
            </For>
          </div>
        </Show>
      </section>
    </div>
  );
}
