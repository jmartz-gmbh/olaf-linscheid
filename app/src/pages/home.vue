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
        <h2 class="font-bold">Jonathan Martz</h2>
        <p class="text-sm">0174 12345678</p>
        <button
          class="bg-gray-400 px-2 py-2 mt-2 text-white border border-black"
          @click="window.location.href = 'https://github.com'"
        >
          Jetzt Anrufen
        </button>
      </div>
    </div>
    <div class="grid grid-cols-6 mt-5">
      <div class="col-span-6">
        <div
          class="text-center mt-5 text-xl border-[#128C7E] border-2 px-2 py-2 rounded-lg"
        >
          Jetzt auch per
          <a href="https://wa.me/00490174123456" class="text-[#128C7E]"
            >Whatsapp</a
          >
          anschreiben und Termin vereinbaren.
        </div>
      </div>
    </div>
    <div class="grid grid-cols-6 mt-10">
      <div class="col-span-6 md:col-span-2 text-center mt-10">
        <router-link to="/gas">
          <fa icon="fire-flame-simple" class="fa-4x" />
        </router-link>
        <h2 class="mt-5">Gas</h2>
        <button class="bg-gray-400 border text-white border-black px-2 py-2 mt-2" @click="$router.push('/gas')">
          mehr Informationen
        </button>
      </div>
      <div class="col-span-6 md:col-span-2 text-center mt-10">
        <router-link to="/wasser">
          <fa icon="water" class="fa-4x" />
        </router-link>
        <h2 class="mt-5">Wasser</h2>
        <button class="bg-gray-400 border text-white border-black px-2 py-2 mt-2" @click="$router.push('/wasser')">
          mehr Informationen
        </button>
      </div>
      <div class="col-span-6 md:col-span-2 text-center mt-10">
        <router-link to="/bad"><fa icon="toilet" class="fa-4x" /></router-link>
        <h2 class="mt-5">Bad</h2>
        <button class="bg-gray-400 border text-white border-black px-2 py-2 mt-2" @click="$router.push('/bad')">
          mehr Informationen
        </button>
      </div>
    </div>
    <div class="col-span-6 mt-10">
      <h2 class="text-lg font-bold">Team:</h2>
      <div class="grid grid-cols-8">
        <div class="col-span-8 md:col-span-2 text-center">
          <div class="card bg-white px-2 py-2">
            <img
              src="https://avatars.githubusercontent.com/u/20771653?v=4"
              alt=""
              class="w-16 rounded-full mx-auto"
            />
            <h2 class="font-bold text-lg">Jonathan Martz</h2>
            <p class="text-sm">
              Türsteher Jonathan lässt nur ordentliche Leute rein
            </p>
          </div>
        </div>
        <div class="col-span-8 md:col-span-2 text-center">
          <div class="card bg-white px-2 py-2">
            <img
              src="https://avatars.githubusercontent.com/u/20771653?v=4"
              alt=""
              class="w-16 rounded-full mx-auto"
            />
            <h2 class="font-bold text-lg">Jonathan Martz</h2>
            <p class="text-sm">
              Türsteher Jonathan lässt nur ordentliche Leute rein
            </p>
          </div>
        </div>
        <div class="col-span-8 md:col-span-2 text-center">
          <div class="card bg-white px-2 py-2">
            <img
              src="https://avatars.githubusercontent.com/u/20771653?v=4"
              alt=""
              class="w-16 rounded-full mx-auto"
            />
            <h2 class="font-bold text-lg">Jonathan Martz</h2>
            <p class="text-sm">
              Türsteher Jonathan lässt nur ordentliche Leute rein
            </p>
          </div>
        </div>
        <div class="col-span-8 md:col-span-2 text-center">
          <div class="card bg-white px-2 py-2">
            <img
              src="https://avatars.githubusercontent.com/u/20771653?v=4"
              alt=""
              class="w-16 rounded-full mx-auto"
            />
            <h2 class="font-bold text-lg">Jonathan Martz</h2>
            <p class="text-sm">
              Türsteher Jonathan lässt nur ordentliche Leute rein
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
};
</script>
