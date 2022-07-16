<template>
    <div class="vp-bad">
        Bad
    </div>
</template>

<script setup>
import { useBreadcrumbStore } from "@/store/breadcrumb";

let breadcrumbStore = useBreadcrumbStore();
breadcrumbStore.add({
  label: "Bad",
  link: "/bad",
});
</script>