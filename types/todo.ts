export enum Status {
  Initialized = "initialized",
  Progress = "progress",
  Done = "done",
}
export type Todo = {
  id: string;
  text: string;
  status: Status;
};
