<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { watch } from "vue";

const props = defineProps<{
  isOpen: boolean;
  duration?: number;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const wait = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));

watch(
  () => props.isOpen,
  async (isOpen) => {
    if (!isOpen) return;
    await wait(props.duration ?? 2500);
    emit("close");
  }
);
</script>
<template>
  <Dialog v-model:open="props.isOpen">
    <DialogContent :showClose="false">
      <DialogDescription class="flex items-center justify-center">
        <div
          class="flex items-center justify-center size-72 overflow-hidden rounded-full border border-slate-200"
        >
          <slot />
        </div>
      </DialogDescription>
    </DialogContent>
  </Dialog>
</template>
