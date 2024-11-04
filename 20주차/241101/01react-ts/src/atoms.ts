import { atom } from "recoil";

interface toDoState {
  [key: string]: string[];
}

export const toDoState = atom({
  key: "toDo",
  default: {
    ToDo: ["a", "b"],
    Doing: ["c", "d", "e"],
    Done: ["f"],
  },
});
