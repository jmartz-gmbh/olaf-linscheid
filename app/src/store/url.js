import { defineStore } from "pinia";

export const useUrlStore = defineStore("url", {
  state() {
    return {
      baseurl: "https://www.olaf-linscheid.de",
    };
  },
  actions: {},
});
