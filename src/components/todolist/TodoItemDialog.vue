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
    <DialogTrigger class="size-full TodoItemDialog p-4">
      <slot></slot>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ todo.title }}</DialogTitle>
      </DialogHeader>
      <div>{{ todo.content }}</div>
    </DialogContent>
  </Dialog>
</template>
