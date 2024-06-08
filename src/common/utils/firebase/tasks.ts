import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import type { TaskSchema } from "@/utils/types";

export const addTask = async (task: TaskSchema, uid: string) => {
  try {
    const tasksCollection = collection(db, `users/${uid}/tasks`);
    return addDoc(tasksCollection, { ...task });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateTask = async (task: TaskSchema, taskId: string, uid: string) => {
  try {
    const taskDoc = doc(db, `users/${uid}/tasks`, taskId);
    return setDoc(taskDoc, task);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};
