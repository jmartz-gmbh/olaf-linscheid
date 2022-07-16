import { defineStore } from "pinia";

export const useBreadcrumbStore = defineStore("breadcrumb", {
  state() {
    return {
      items: [],
    };
  },
  actions: {
    reset: function () {
      this.items = [];
      this.add({
        label: "Home",
        link: "/",
      });
    },
    add: function (item) {
      this.items.push(item);
    },
  },
});
