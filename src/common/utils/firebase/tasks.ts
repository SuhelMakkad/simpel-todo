import { collection, addDoc, setDoc, deleteDoc, getDocs, doc, query } from "firebase/firestore";
import { db } from "@/utils/firebase";
import type { Task, TaskSchema } from "@/utils/types";

export const addTask = (task: TaskSchema, uid: string) => {
  try {
    const tasksCollection = collection(db, `users/${uid}/tasks`);
    return addDoc(tasksCollection, { ...task });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateTask = (task: TaskSchema, taskId: string, uid: string) => {
  try {
    const taskDoc = doc(db, `users/${uid}/tasks/${taskId}`);
    return setDoc(taskDoc, task);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export const getTasks = async (uid: string) => {
  try {
    const tasksCollection = collection(db, `users/${uid}/tasks`);
    const q = query(tasksCollection);
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

export const deleteTask = (taskId: string, uid: string) => {
  try {
    const taskDoc = doc(db, `users/${uid}/tasks/${taskId}`);
    return deleteDoc(taskDoc);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};
