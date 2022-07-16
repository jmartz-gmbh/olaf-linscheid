<template>
  <div class="vp-home">
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-3 text-center">
        <h2 class="font-bold text-lg mt-5">Willkommen</h2>
        <p>
          auf der neuen Webseite von der Firma Linscheid. <br />
          Hier findest du alle Informationen zu unseren Servicen.
        </p>
        <br />
        <h2 class="font-bold">Öffnungszeiten:</h2>
        <p>
          <span>Montag-Freitag: 8:00 - 17:00</span>
        </p>
        <br />
        <h2 class="font-bold">Telefon:</h2>
        <p>
          <span>02261 / 12345</span>
        </p>
      </div>
      <div class="col-span-6 md:col-span-3 text-center">
        <img
          src="https://avatars.githubusercontent.com/u/20771653?v=4"
          alt=""
          class="w-32 rounded-full mx-auto mt-5"
        />
        <h2 class="font-bold mt-2">Olaf Linscheid</h2>
        <p class="text-sm">0174 12345678</p>

        <button
          class="bg-gray-400 px-2 py-2 mt-2 text-white border border-black"
          @click="call('004901745141698')"
        >
          Jetzt anrufen
        </button>
      </div>
    </div>
    <note-whatsapp></note-whatsapp>
    <icon-bar></icon-bar>
    <div class="col-span-6 mt-10">
      <team-list></team-list>
    </div>
  </div>
</template>

<script setup>
import TeamList from "../components/team/list.vue";
import IconBar from "../components/icon/bar.vue";
import NoteWhatsapp from "../components/note/whatsapp.vue";

let call = function (number) {
  location.href = "tel:" + number;
};
</script>
