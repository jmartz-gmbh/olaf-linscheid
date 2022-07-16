<template>
    <div class="vp-wasser">
        Wasser
    </div>
</template>

<script setup>
import { useBreadcrumbStore } from "@/store/breadcrumb";

let breadcrumbStore = useBreadcrumbStore();
breadcrumbStore.add({
  label: "Wasser",
  link: "/wasser",
});
</script>