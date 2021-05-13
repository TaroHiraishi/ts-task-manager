import { Task } from "@/models/task";
import { createTask } from "@/repository";
import {
  DefineActions,
  DefineGetters, DefineMutations,
} from 'vuex-type-helper'

export interface TaskState {
  tasks: Task[]
}

export interface TaskGetters {
  tasks: Task[]
}

export interface TaskMutations {
  updateTasks: {
    tasks: Task[]
  },
  addTask: {
    task: Task
  }
}

export interface TaskActions {
  addTask: {
    body: string
  }
}

const state: TaskState = {
  tasks: [],
}

const getters: DefineGetters<
  TaskGetters,
  TaskState
> = {
  tasks(state) {
    return state.tasks
  }
}

const mutations: DefineMutations<
  TaskMutations,
  TaskState
> = {
  updateTasks(state, { tasks }) {
    state.tasks = tasks
  },
  addTask(state, { task }) {
    state.tasks.unshift(task)
  }
}

const actions: DefineActions<
  TaskActions,
  TaskState,
  TaskMutations
> = {
  addTask({ commit }, payload) {
    createTask(payload.body).then((task) => {
      commit('addTask', { task })
    })
    console.log(state.tasks)
  },
}

export const task = {
  state,
  getters,
  mutations,
  actions,
}
