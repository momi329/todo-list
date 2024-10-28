<script setup lang="ts">
import IconDelete from "@/assets/IconDelete.vue";
import type { Ref } from "vue";
import { ref } from "vue";
import ActionDialog from "./ActionDialog.vue";
import { MOCK_TODOS } from "./mock/TODOS_MOCK";
import AddTodoDialog from "./todolist/AddTodoDialog.vue";
import TodoItemDialog from "./todolist/TodoItemDialog.vue";
const input = ref("");
const titles = ref(["TODO", "IN PROGRESS", "DONE"]);

export type Status = "TODO" | "IN PROGRESS" | "DONE";
export type Todo = {
  userId: string;
  title: string;
  id: string;
  content?: string;
  subTasks?: { text: string; subTaskId: string; done: boolean }[];
  status: Status;
  expectedCompletionTime: string;
  completedTime?: string;
};

const todos: Ref<Todo[]> = ref(MOCK_TODOS as Todo[]);
const isOpen = ref(false);
const addNewTodo = (newTodo: Todo) => {
  todos.value.push(newTodo);
};
const deleteTodo = (todo: Todo) => {
  todos.value = todos.value.filter((t) => t.id !== todo.id);
  isOpen.value = true;
};
</script>

<template>
  <header class="flex items-center h-16 bg-slate-50 p-5 border-b">
    <h1 class="text-ml font-bold flex flex-row items-center">
      <img src="@/assets/logo-work.gif" alt="logo" class="size-24" />
      TODO LIST
    </h1>
  </header>

  <div class="flex h-screen flex-row">
    <div
      v-for="title of titles"
      class="bg-slate-50 w-1/3 gap-4 flex flex-col items-center h-screen p-4"
    >
      <AddTodoDialog :title="title" @addTodo="addNewTodo" />

      <template v-for="todo in todos" :key="todo.id">
        <div
          v-if="todo.status === title"
          class="border border-slate-200 w-full rounded cursor-pointer"
        >
          <TodoItemDialog :todo="todo">
            <div class="size-full flex flex-row items-center justify-between">
              <h3 class="text-left">{{ todo.title }}</h3>
              <IconDelete
                size="16"
                color="gray"
                class="flex-shrink-0"
                @click.prevent="deleteTodo(todo)"
              />
            </div>
          </TodoItemDialog>
        </div>
      </template>
    </div>
  </div>
  <ActionDialog :isOpen="isOpen" @close="isOpen = false" :duration="2500">
    <img src="@/assets/delete.png" alt="delete" />
  </ActionDialog>
</template>
