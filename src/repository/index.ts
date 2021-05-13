import { Task } from "@/models/task"
import { firestore } from "@/plugins/firebase"

export const createTask = async (title: string, body: string) => {
  const response = await firestore.collection('tasks')
    .add({
      title,
      body,
    })

  return new Task(
    response.id,
    title,
    body,
  )
}
