"use client";

import { enableReactUse } from "@legendapp/state/config/enableReactUse";
import EmptyTodo from "@/components/empty-todo";
import TodoItem from "@/components/todo-item";
import { Button } from "@/components/ui/button";
import { For, Show, useObservable, Reactive } from "@legendapp/state/react";
import { enableReactComponents } from "@legendapp/state/config/enableReactComponents";

import type { Todo } from "../types/todo";
import { Status } from "../types/todo";
import { Input } from "@/components/ui/input";
import { state } from "@/store/todo";

enableReactUse();
enableReactComponents();

export default function Home() {
  const input = useObservable("");

  const handleSave = () => {
    state.todos.push({
      id: crypto.randomUUID(),
      status: Status.Initialized,
      text: input.get(),
    });
    input.set("");
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
          $value={input}
        />

        <Button onClick={handleSave}>Save</Button>
      </section>

      <section className="mt-8 max-w-lg mx-auto">
        <div className="flex flex-col gap-y-2">
          <For each={state.todos}>
            {(todo) => <TodoItem todo={todo.get() as Todo} />}
          </For>
        </div>
      </section>
    </div>
  );
}
