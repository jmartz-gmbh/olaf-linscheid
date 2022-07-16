<template>
  <div class="vc-icon-bar">
    <h2 class="font-bold text-xl mt-10">Services:</h2>
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-2 text-center mt-10">
        <router-link to="/gas">
          <fa icon="fire-flame-simple" class="fa-4x" />
        </router-link>
        <h2 class="mt-5">Gas</h2>
        <button
          class="bg-gray-400 border text-white border-black px-2 py-2 mt-2"
          @click="$router.push('/gas')"
        >
          mehr Informationen
        </button>
      </div>
      <div class="col-span-6 md:col-span-2 text-center mt-10">
        <router-link to="/wasser">
          <fa icon="water" class="fa-4x" />
        </router-link>
        <h2 class="mt-5">Wasser</h2>
        <button
          class="bg-gray-400 border text-white border-black px-2 py-2 mt-2"
          @click="$router.push('/wasser')"
        >
          mehr Informationen
        </button>
      </div>
      <div class="col-span-6 md:col-span-2 text-center mt-10">
        <router-link to="/bad"><fa icon="toilet" class="fa-4x" /></router-link>
        <h2 class="mt-5">Bad</h2>
        <button
          class="bg-gray-400 border text-white border-black px-2 py-2 mt-2"
          @click="$router.push('/bad')"
        >
          mehr Informationen
        </button>
      </div>
    </div>
  </div>
</template>
