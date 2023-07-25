import Todo from "@/components/todo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col gap-y-4 items-center max-w-lg mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary">Todo</h1>
        <p className="text-xl text-muted-foreground">
          Built with Next-13 app router | Legend state | Shadcn-ui
        </p>
      </section>

      <section className="flex w-full max-w-lg  mx-auto items-center space-x-2 justify-center mt-8">
        <Input type="text" placeholder="Start typing..." autoFocus />
        <Button type="submit">Save</Button>
      </section>

      <section className="mt-8 flex flex-col gap-y-2 max-w-lg mx-auto">
        {[...new Array(4)].map((todo) => (
          <Todo />
        ))}
      </section>
    </div>
  );
}
