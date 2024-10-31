<!-- src/components/Navbar.vue -->
<template>
  <nav class="navbar bg-base-100 shadow-lg">
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost normal-case text-xl">
        MyApp
      </router-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'calculator' }">Calculator</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'comments-api' }">Comments API</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'users-api' }">Users API</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>