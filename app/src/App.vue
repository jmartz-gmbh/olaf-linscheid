<template>
  <div class="app">
    <header class="mx-auto max-w-5xl px-2 py-2">
      <header-general></header-general>
    </header>
    <messages class="mx-auto max-w-5xl"></messages>
    <main class="mx-auto max-w-5xl bg-white px-2 py-2 mt-2 min-h-screen">
      <breadcrumb></breadcrumb>
      <router-view></router-view>
    </main>
    <footer class="mx-auto max-w-5xl px-2 py-2 mt-2">
      <footer-general></footer-general>
    </footer>
  </div>
</template>
<script setup>
import headerGeneral from "./components/header.vue";
import footerGeneral from "./components/footer.vue";
import messages from "./components/messages.vue";
import breadcrumb from "./components/breadcrumb.vue";
import "./tailwind.css";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useBreadcrumbStore } from "@/store/breadcrumb";
import { useMessagesStore } from "@/store/messages";

let breadcrumbStore = useBreadcrumbStore();
let messagesStore = useMessagesStore();

let route = useRoute();
onMounted(function () {
  breadcrumbStore.add({
    label: "Home",
    link: "/",
  });
  messagesStore.add({
    status: "warning",
    message: "Dies ist nicht die offizielle Webseite von Olaf Linscheid",
  });
});

watch(route, function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
  breadcrumbStore.reset();
});
</script>

<style lang="less">
.app {
  background: linear-gradient(-45deg, black, blue);
  background-size: auto;
}
</style>
