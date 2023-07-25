export default function EmptyTodo() {
  return (
    <div className="flex flex-col gap-y-2 items-center">
      <h2 className="text-2xl font-medium">No Todo</h2>
      <p className="text-muted-foreground">Start adding new todos </p>
    </div>
  );
}
