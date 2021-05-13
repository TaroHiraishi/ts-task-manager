import { TaskInterface } from '@/types/task'

export class Task implements TaskInterface {
  public id: string
  public title: string
  public body: string

  constructor(id: string, title: string, body: string) {
    this.id = id
    this.title = title
    this.body = body
  }
}
