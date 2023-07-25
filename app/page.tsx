import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col gap-y-4 items-center">
        <h1 className="text-4xl font-bold text-primary">Todo</h1>
        <p className="text-xl text-muted-foreground">
          Built with Next-13 app router | Legend state | Shadcn-ui
        </p>
      </section>

      <section className="flex w-full max-w-md  mx-auto items-center space-x-2 justify-center mt-8">
        <Input type="text" placeholder="Start typing..." autoFocus />
        <Button type="submit">Save</Button>
      </section>
    </div>
  );
}
