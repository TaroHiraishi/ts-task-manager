import { TaskInterface } from '@/types/task'

export class Task implements TaskInterface {
  public id: string
  public body: string

  constructor(id: string, body: string) {
    this.id = id
    this.body = body
  }
}
