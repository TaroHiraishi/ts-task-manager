import { Task } from "@/models/task"
import { firestore } from "@/plugins/firebase"

export const createTask = async (body: string) => {
  const response = await firestore.collection('tasks')
    .add({
      body,
    })

  return new Task(
    response.id,
    body,
  )
}
