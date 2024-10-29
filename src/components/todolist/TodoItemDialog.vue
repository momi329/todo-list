<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Todo } from "../HomePage.vue";

const { todo } = defineProps<{
  todo: Todo;
}>();
</script>
<template>
  <Dialog>
    <DialogTrigger class="size-full p-4">
      <slot></slot>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ todo.title }}</DialogTitle>
      </DialogHeader>
      <div>{{ todo.content }}</div>
      <div class="text-sm text-slate-500 text-bold mt-2">Comment</div>

      <div
        class="grid grid-cols-1 text-sm text-slate-500 divide-y border-slate-200"
      >
        <div
          v-for="subTask in todo.subTasks"
          class="flex gap-4 items-center py-4 first:pt-0 last:pb-0"
        >
          <img
            src="@/assets/logo-work.gif"
            alt="logo-work"
            class="size-8 rounded-full border border-slate-200"
          />
          <div>{{ subTask.text }}</div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
