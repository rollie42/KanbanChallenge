import type { Status } from "./App";

export interface Operation {
  ts: Date;
  status: Status;
}
