import {
  collection,
  addDoc,
  setDoc,
  deleteDoc,
  getDocs,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/utils/firebase";
import type { Task, TaskSchema } from "@/utils/types";

export const addTask = (task: TaskSchema, uid: string) => {
  try {
    const tasksCollection = collection(db, `users/${uid}/tasks`);
    return addDoc(tasksCollection, {
      ...task,
      createdAt: new Date().toISOString(),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateTask = (task: TaskSchema, taskId: string, uid: string) => {
  try {
    const taskDoc = doc(db, `users/${uid}/tasks/${taskId}`);
    return setDoc(
      taskDoc,
      {
        ...task,
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export const deleteTask = (taskId: string, uid: string) => {
  const taskDoc = doc(db, `users/${uid}/tasks/${taskId}`);
  return deleteDoc(taskDoc);
};

export type Filters = {
  status?: string[];
  search?: string;
};

export const getTasks = async (uid: string, filters: Filters = {}) => {
  try {
    const queries = [];
    if (filters) {
      if (filters.status?.length) {
        queries.push(where("status", "in", filters.status));
      }

      if (filters.search) {
        queries.push(where("title", "==", filters.search));
        queries.push(where("description", "==", filters.search));
      }
    }

    const tasksCollection = collection(db, `users/${uid}/tasks`);
    const q = query(tasksCollection, ...queries);

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return [];
    }

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Task[];
  } catch (e) {
    console.error("Error getting documents: ", e);
    return null;
  }
};

// title: Watch a documentary
// description: Watch a documentary about space exploration on Netflix or YouTube to learn more about the universe.
