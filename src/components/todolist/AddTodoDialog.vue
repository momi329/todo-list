<script setup lang="ts">
import type { Todo } from "@/components/HomePage.vue";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { defineEmits, ref } from "vue";

const props = defineProps<{
  title: string;
}>();

const { title } = props;
console.log(title);

defineEmits<{
  (e: "addTodo", todo: Todo): void;
}>();

const newTodo = ref<Todo>({
  userId: "",
  title: "",
  id: "",
  status: "TODO",
  expectedCompletionTime: "",
});
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <h3 class="text-ml font-bold p-1 items-center flex justify-between gap-4">
        {{ title }}
        <Button
          v-if="title === 'TODO'"
          variant="outline"
          size="xs"
          class="rounded-full"
          >+</Button
        >
      </h3>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle class="mb-4">Add Todo</DialogTitle>
        <DialogDescription class="flex flex-col gap-4">
          <Label for="title">Title</Label>
          <Input type="text" v-model="newTodo.title" class="w-full" />
          <Label for="content">Content</Label>
          <Input type="text" v-model="newTodo.content" class="w-full" />
          <Label for="expectedCompletionTime">Expected Completion Time</Label>
          <Input
            type="text"
            v-model="newTodo.expectedCompletionTime"
            class="w-full"
            placeholder="YYYYMMDD"
          />
          <DialogTrigger as-child>
            <Button class="w-full mt-4" @click="$emit('addTodo', newTodo)"
              >Add</Button
            >
          </DialogTrigger>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>
