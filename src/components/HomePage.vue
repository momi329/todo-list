<script setup lang="ts">

import IconDelete from "@/assets/IconDelete.vue";
import type { Ref } from "vue";
import { cloneVNode, ref } from "vue";
import ActionDialog from "./ActionDialog.vue";
import { MOCK_TODOS } from "./mock/TODOS_MOCK";
import AddTodoDialog from "./todolist/AddTodoDialog.vue";
import TodoItemDialog from "./todolist/TodoItemDialog.vue";
import Header from "./ui/header/Header.vue";


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



// drag and drop
const draggingEl=ref("")
const dropEl=ref('')

const onDragStart = (e: DragEvent, todoId: string) => {
  draggingEl.value = todoId 
}

const onDragOver=(title:Status)=>{
  dropEl.value=title
}

const onDrop = ( targetStatus: Status) => {
  console.log('onDrop',draggingEl.value)

  const todoId = draggingEl.value 
  if (todoId) {
    const todo = todos.value.find(t => t.id === todoId);
    if (todo) {
      todo.status = targetStatus;
    }
  }
  draggingEl.value=""
  dropEl.value=''
};

</script>

<template>
  <Header/>

  <div class="flex h-screen flex-row">
    <div
      v-for="title of titles"
      @drop="(e) => onDrop(title as Status)"
      @dragover.prevent="onDragOver(title as Status)"
      @dragenter.prevent
      :key="title"
      :class="[
        'w-1/3 gap-4 flex flex-col items-center h-screen p-4 border border-slate-100',
        dropEl===title ?'bg-purple-50':''
      ]"    >
      <AddTodoDialog :title="title" @addTodo="addNewTodo" />

      <template v-for="todo in todos" :key="todo.id">
        <div
          draggable="true"
          v-if="todo.status === title"
          @dragstart="onDragStart($event,todo.id)"
          :class="['border border-slate-200 w-full rounded cursor-pointer transition-all',
          draggingEl===todo.id ? ' opacity-10' : '']"
        >
          <TodoItemDialog :todo="todo" :showClose="true">
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
