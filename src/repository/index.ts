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

export const getTasks = async () => {
  const responses = await firestore.collection('tasks').get()

  const responsesData = responses.docs
  return responsesData.map((taskResponse) => {
    return new Task(
      taskResponse.id,
      taskResponse.data().body,
    )
  })
}
