<template>
  <div class="vc-header flex justify-between mt-2">
    <span
      ><router-link to="/" class="font-bold text-white text-xl ml-2"
        >olaf-linscheid.de</router-link
      ></span
    >
    <nav class="mt-2">
      <ul class="flex justify-between text-white space-x-5">
        <li>
          <router-link to="/gas">Gas</router-link>
        </li>
        <li>
          <router-link to="/wasser">Wasser</router-link>
        </li>
        <li>
          <router-link to="/bad">Bad</router-link>
        </li>
        <li>
          <router-link to="/impressum">Impressum</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
