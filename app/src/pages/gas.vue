<template>
  <div class="vp-gas">Gas</div>
</template>

<script setup>
import { useBreadcrumbStore } from "@/store/breadcrumb";

let breadcrumbStore = useBreadcrumbStore();
breadcrumbStore.add({
  label: "Gas",
  link: "/gas",
});
</script>
