<template>
  <div class="vc-breadcrumbs">
    <div class="border bg-white rounded-lg px-2 py-2 block items mb-2">
      <router-link
        :to="item.link"
        class="item mr-2"
        v-for="(item, index) in items"
        >{{ item.label }}</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { useBreadcrumbStore } from "@/store/breadcrumb.js";
import { storeToRefs } from "pinia";

let store = useBreadcrumbStore();
const { items } = storeToRefs(store);
</script>

<style lang="less">
.items {
  .item:before {
    content: ">";
    padding-right: 5px;
  }
  .item:first-child:before {
    content: "";
    padding-right: 0;
  }
}
</style>
