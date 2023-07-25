"use client";

import EmptyTodo from "@/components/empty-todo";
import Todo from "@/components/todo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Show, useObservable } from "@legendapp/state/react";

export default function Home() {
  const state$ = useObservable({
    todos: [],
    input: "",
  });

  const handleSave = () => {};
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
          value={state$.input.get()}
          onChange={(event) => state$.input.set(event.target.value)}
        />
        <Button onClick={handleSave}>Save</Button>
      </section>

      <section className="mt-8 max-w-lg mx-auto">
        <Show if={state$.todos.length} else={<EmptyTodo />}>
          <div className="flex flex-col gap-y-2">
            {state$.todos.map((todo) => (
              <Todo />
            ))}
          </div>
        </Show>
      </section>
    </div>
  );
}
