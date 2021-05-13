import { firestore } from "@/plugins/firebase"

export const createTask = async (title: string, body: string) => {
  await firestore.collection('tasks')
    .add({
      title,
      body,
    })

  return
}
