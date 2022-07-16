<template>
  <div class="vc-messages">
    <div
      :class="{
        'flex items-center text-sm font-bold px-4 py-3 justify-between mb-2': true,
        'bg-red-500 text-white': item.status == 'warning',
        'bg-green-500 text-white': item.status == 'success',
      }"
      v-for="(item, index) in store.items"
    >
      <p>
        <fa icon="info" class="mr-3" />
        {{ item.message }}
      </p>
      <fa icon="times" @click="store.close(index)" class="ml-3" />
    </div>
  </div>
</template>
<script setup>
import { useMessagesStore } from "@/store/messages.js";
let store = useMessagesStore();
</script>
