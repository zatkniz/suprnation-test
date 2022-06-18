<template>
  <div>
    <ul class="flex gap-4 justify-center mb-10">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/calculator">Calculator</router-link></li>
    </ul>
    <router-view />
  </div>
</template>
