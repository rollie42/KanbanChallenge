import type { Status } from "./App";
import type { Operation } from "./Operation";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: Status;
  operations: Operation[];
}
