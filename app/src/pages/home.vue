<template>
  <div class="vp-home">
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-3 text-center">
        <h2 class="font-bold text-lg mt-5">Willkommen</h2>
        <p>
          auf der neuen Webseite von der Firma Linscheid. <br />
          Hier findest du alle Informationen zu unseren Servicen.
        </p>
      </div>
      <div class="col-span-6 md:col-span-3 text-center">
        <img
          src="https://avatars.githubusercontent.com/u/20771653?v=4"
          alt=""
          class="w-32 rounded-full mx-auto mt-5"
        />
        <h2 class="font-bold">Jonathan Martz</h2>
        <p class="text-sm">Der Chef</p>
      </div>
    </div>
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-2 text-center mt-10">
        <fa icon="fire-flame-simple" class="fa-4x" />
        <h2 class="mt-5">Gas</h2>
      </div>
      <div class="col-span-6 md:col-span-2 text-center mt-10">
        <fa icon="water" class="fa-4x" />
        <h2 class="mt-5">Wasser</h2>
      </div>
      <div class="col-span-6 md:col-span-2 text-center mt-10">
        <fa icon="toilet" class="fa-4x" />
        <h2 class="mt-5">Bad</h2>
      </div>
    </div>
    <div class="grid grid-cols-6 mt-10">
      <div class="col-span-6"><h2 class="text-lg font-bold">Team:</h2></div>
      <div class="col-span-6 md:col-span-3">
        <div class="grid grid-cols-6">
          <div class="col-span-6 md:col-span-3 text-center">
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
          <div class="col-span-6 md:col-span-3 text-center">
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
          <div class="col-span-6 md:col-span-3 text-center">
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
          <div class="col-span-6 md:col-span-3 text-center">
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
      <div class="col-span-6 md:col-span-3 text-center">
        <div class="grid grid-cols-6 gap-2">
          <div class="col-span-6 md:col-span-3">
            <div class="card">
              <img
                src="https://picsum.photos/320/180"
                class="mx-auto border border-black"
                alt=""
              />
              <h2>Van 1</h2>
              <p>Der Van von Dieter</p>
            </div>
          </div>
          <div class="col-span-6 md:col-span-3">
            <div class="card">
              <img
                src="https://picsum.photos/320/180"
                class="mx-auto border border-black"
                alt=""
              />
              <h2>Van 2</h2>
              <p>Der Van von Walter</p>
            </div>
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
